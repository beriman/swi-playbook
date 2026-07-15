import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");

const requiredPaths = [
  ".github/workflows/verify-playbook.yml",
  ".markdownlint-cli2.jsonc",
  "AGENTS.md",
  "README.md",
  "CHANGELOG.md",
  "CONTRIBUTING.md",
  "00-foundation/000-purpose.md",
  "00-foundation/001-scope.md",
  "00-foundation/002-guiding-principles.md",
  "00-foundation/003-swi-alignment.md",
  "00-foundation/004-glossary.md",
  "01-governance/roles-and-responsibilities.md",
  "01-governance/decision-rights.md",
  "01-governance/risk-and-approval.md",
  "01-governance/trusted-changes.md",
  "01-governance/architecture-decisions.md",
  "01-governance/playbook-maintenance.md",
  "02-workflows/idea-to-release.md",
  "02-workflows/github-workflow.md",
  "02-workflows/ai-handoff.md",
  "02-workflows/emergency-workflow.md",
  "02-workflows/concurrent-work.md",
  "03-ai-team/ai-roles.md",
  "03-ai-team/chatgpt.md",
  "03-ai-team/chatgpt-work.md",
  "03-ai-team/codex.md",
  "03-ai-team/hemuhemu.md",
  "03-ai-team/prompt-and-context-standards.md",
  "04-engineering/repository-standards.md",
  "04-engineering/branch-commit-pr.md",
  "04-engineering/testing-and-verification.md",
  "04-engineering/security-standards.md",
  "04-engineering/deployment-and-rollback.md",
  "04-engineering/definition-of-done.md",
  "05-product/product-discovery.md",
  "05-product/prd-standard.md",
  "05-product/pillar-contribution.md",
  "05-product/roadmap-and-prioritization.md",
  "05-product/release-and-learning.md",
  "templates/idea-template.md",
  "templates/prd-template.md",
  "templates/adr-template.md",
  "templates/issue-template.md",
  "templates/handoff-template.md",
  "templates/patch-log-template.md",
  "templates/implementation-spec-template.md",
  "adr/accepted/ADR-0001-four-pillars-ecosystem.md",
  "adr/accepted/ADR-0002-swi-playbook-cross-ecosystem.md",
  "adr/accepted/ADR-0003-systemswi-information-and-oversight.md",
  "adr/accepted/ADR-0004-durable-decision-records.md",
  "adr/accepted/ADR-0005-playbook-ownership-and-review-cadence.md",
  "patch-log/README.md",
  "patch-log/2026/2026-07-15-swi-playbook-v0.1-foundation.md",
  "patch-log/2026/2026-07-15-playbook-enforcement-and-maintenance.md",
  "scripts/verify-playbook.mjs",
];

const forbiddenName = ["Systems", "WI"].join("");
const credentialPatterns = [
  {
    name: "GitHub classic token",
    regex: new RegExp(`${["gh", "p_"].join("")}[A-Za-z0-9]{20,}`, "g"),
  },
  {
    name: "GitHub fine-grained token",
    regex: new RegExp(`${["github", "_pat_"].join("")}[A-Za-z0-9_]{20,}`, "g"),
  },
  {
    name: "API key",
    regex: new RegExp(`${["s", "k-"].join("")}[A-Za-z0-9_-]{20,}`, "g"),
  },
  {
    name: "AWS access key",
    regex: new RegExp(`${["AK", "IA"].join("")}[0-9A-Z]{16}`, "g"),
  },
  {
    name: "JWT",
    regex: /eyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{10,}/g,
  },
  {
    name: "Private key",
    regex: new RegExp(
      ["-----BEGIN ", "(?:RSA |EC |OPENSSH )?", "PRIVATE KEY-----"].join(""),
      "g",
    ),
  },
];

function trackedFiles() {
  return execFileSync("git", ["ls-files", "-z"], { cwd: root })
    .toString("utf8")
    .split("\0")
    .filter(Boolean);
}

function readText(relativePath) {
  const buffer = fs.readFileSync(path.join(root, relativePath));
  if (buffer.includes(0)) return null;
  return buffer.toString("utf8");
}

function lineNumber(content, index) {
  return content.slice(0, index).split("\n").length;
}

function markdownTargets(content) {
  const targets = [];
  const pattern = /!?\[[^\]]*\]\(([^)]+)\)/g;
  let match;

  while ((match = pattern.exec(content))) {
    let target = match[1].trim();
    if (target.startsWith("<") && target.endsWith(">")) {
      target = target.slice(1, -1);
    }
    target = target.split(/\s+["']/)[0];
    targets.push({ target, index: match.index });
  }

  return targets;
}

function validateRepository() {
  const files = trackedFiles();
  const tracked = new Set(files);
  const failures = [];
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  for (const requiredPath of requiredPaths) {
    if (!tracked.has(requiredPath)) {
      failures.push(`minimum-structure: missing ${requiredPath}`);
    }
  }

  for (const file of files) {
    const absolutePath = path.join(root, file);
    const stat = fs.statSync(absolutePath);
    const content = readText(file);

    if (file.includes(forbiddenName)) {
      failures.push(`official-naming: forbidden name in path ${file}`);
    }

    if (stat.size === 0 || (content !== null && content.trim().length === 0)) {
      failures.push(`empty-file: ${file}`);
      continue;
    }

    if (content === null) continue;

    const forbiddenIndex = content.indexOf(forbiddenName);
    if (forbiddenIndex !== -1) {
      failures.push(
        `official-naming: ${file}:${lineNumber(content, forbiddenIndex)} gunakan SystemSWI`,
      );
    }

    for (const pattern of credentialPatterns) {
      pattern.regex.lastIndex = 0;
      const match = pattern.regex.exec(content);
      if (match) {
        failures.push(
          `credential-pattern: ${file}:${lineNumber(content, match.index)} ${pattern.name}`,
        );
      }
    }
  }

  for (const file of markdownFiles) {
    const content = readText(file);
    if (content === null) continue;

    for (const { target, index } of markdownTargets(content)) {
      if (/^(https?:|mailto:|tel:|#)/i.test(target)) continue;

      const pathOnly = decodeURIComponent(target.split("#")[0].split("?")[0]);
      if (!pathOnly) continue;

      const resolved = path.resolve(path.dirname(path.join(root, file)), pathOnly);
      const outsideRoot = resolved !== root && !resolved.startsWith(`${root}${path.sep}`);
      if (outsideRoot || !fs.existsSync(resolved)) {
        failures.push(
          `internal-link: ${file}:${lineNumber(content, index)} missing ${target}`,
        );
      }
    }
  }

  return { failures, files, markdownFiles };
}

function selfTest() {
  const credentialFixtures = [
    `${["gh", "p_"].join("")}${"a".repeat(24)}`,
    `${["github", "_pat_"].join("")}${"a".repeat(24)}`,
    `${["s", "k-"].join("")}${"a".repeat(24)}`,
    `${["AK", "IA"].join("")}${"A".repeat(16)}`,
    `eyJ${"a".repeat(24)}.${"b".repeat(24)}.${"c".repeat(12)}`,
    ["-----BEGIN ", "PRIVATE KEY-----"].join(""),
  ];
  const tests = [
    forbiddenName === ["System", "sWI"].join(""),
    credentialPatterns.every((pattern, index) => {
      pattern.regex.lastIndex = 0;
      return pattern.regex.test(credentialFixtures[index]);
    }),
    markdownTargets("[valid](README.md)")[0]?.target === "README.md",
    " \n\t".trim().length === 0,
  ];

  if (tests.some((result) => !result)) {
    console.error("Verifier self-test: FAIL");
    process.exit(1);
  }

  console.log("Verifier self-test: PASS");
}

if (process.argv.includes("--self-test")) {
  selfTest();
  process.exit(0);
}

const result = validateRepository();

if (result.failures.length > 0) {
  console.error("Playbook policy checks: FAIL");
  for (const failure of result.failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Playbook policy checks: PASS");
console.log(`- tracked files: ${result.files.length}`);
console.log(`- Markdown files: ${result.markdownFiles.length}`);
console.log(`- minimum paths: ${requiredPaths.length}`);
console.log("- internal links, official naming, credential patterns, and empty files: PASS");
