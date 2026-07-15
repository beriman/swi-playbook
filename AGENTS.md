# Instruksi Agen — SWI Playbook

File ini berlaku untuk seluruh repository. Baca sebelum mengubah dokumen, workflow, template, ADR, atau patch log.

## Urutan Baca Wajib

1. [README](README.md).
2. [Keselarasan SWI](00-foundation/003-swi-alignment.md).
3. [Peran dan tanggung jawab](01-governance/roles-and-responsibilities.md).
4. [Risiko dan approval](01-governance/risk-and-approval.md).
5. Workflow yang relevan di [`02-workflows/`](02-workflows/idea-to-release.md).
6. [Definition of Done](04-engineering/definition-of-done.md).
7. [CONTRIBUTING](CONTRIBUTING.md) dan instruksi yang lebih spesifik bila tersedia.

## Source of Truth

1. hukum dan instruksi resmi yang berlaku;
2. visi, misi, cita-cita, serta arah perusahaan di SystemSWI;
3. keputusan domain yang telah disetujui dalam PRD, ADR, SOP, atau data contract;
4. SWI Playbook untuk cara kerja lintas ekosistem;
5. issue dan catatan kerja;
6. chat informal.

Visi dan misi tidak diduplikasi di repository ini. Gunakan [halaman About SystemSWI](https://systemswi.vercel.app/about) sebagai rujukan resmi.

## Risk Classification

- **Low:** dokumentasi atau maintenance kecil, aman, reversible, dan tidak mengubah kebijakan material.
- **Medium:** workflow, integration, data contract non-destruktif, automation write, atau CI baru. Wajib issue/spec, branch, verification, PR, dan patch record.
- **High/Critical:** auth, permission, payment, settlement, finansial, source of truth, secret, destructive migration, atau penghapusan data. Wajib human approval, ADR/decision record, verification plan, rollback, dan audit trail.

Jika ragu, gunakan level lebih tinggi sampai ada evidence.

## Larangan

- jangan membuat arah perusahaan baru atau menduplikasi visi/misi;
- jangan mengarang threshold finansial, permission, atau business rule;
- jangan menyimpan secret, credential, data transaksi, atau konfigurasi produksi;
- jangan menimpa foreign changes;
- jangan menjalankan `reset`, `stash`, destructive checkout, atau force-push tanpa instruksi;
- jangan push medium/high change langsung ke `main`;
- jangan menyatakan selesai tanpa verification evidence;
- gunakan nama resmi **SystemSWI** secara konsisten.

Jika file scope berbenturan, laporkan `BLOCKED_BY_CONCURRENT_WORK`.

## Handoff dan Completion Report

Handoff besar wajib memuat tujuan, konteks, source of truth, repository/file scope, scope, out of scope, business rules, risk level, acceptance criteria, verification, rollback, expected output, authority limits, dan Open Decisions.

Laporan akhir memuat status, perubahan, branch/commit/PR, verification evidence, impact, patch record, known limitations, Open Decisions, dan next step.

Gunakan [template handoff](templates/handoff-template.md) dan [implementation spec](templates/implementation-spec-template.md).

## Template

- ide: [`templates/idea-template.md`](templates/idea-template.md);
- PRD: [`templates/prd-template.md`](templates/prd-template.md);
- ADR: [`templates/adr-template.md`](templates/adr-template.md);
- issue: [`templates/issue-template.md`](templates/issue-template.md);
- handoff: [`templates/handoff-template.md`](templates/handoff-template.md);
- patch log: [`templates/patch-log-template.md`](templates/patch-log-template.md).

## Patch Record

- perubahan bermakna atau release: buat patch log tersendiri `patch-log/YYYY/YYYY-MM-DD-slug.md`;
- maintenance kecil: tambahkan satu entri ke `patch-log/YYYY/YYYY-MM-maintenance.md`;
- buat maintenance log bulanan hanya saat entri pertama diperlukan;
- CI, governance, template, business rule, ADR, dan perubahan lintas-file bukan maintenance kecil;
- setiap record harus menautkan owner, verification, issue/PR/commit, impact, dan limitation yang relevan.

## Verification Wajib

```bash
npx --yes markdownlint-cli2@0.23.0 '**/*.md' '#node_modules' '#.git'
node scripts/verify-playbook.mjs --self-test
node scripts/verify-playbook.mjs
git diff --check
```

GitHub menjalankan Markdown lint dan policy checks otomatis pada setiap pull request serta push ke `main`.

## Pemeliharaan

Owner dan cadence mengikuti [Pemeliharaan SWI Playbook](01-governance/playbook-maintenance.md). Beriman adalah Product Owner; ChatGPT Work atau HemuHemu dapat menjadi maintainer operasional sesuai task dan kewenangannya.
