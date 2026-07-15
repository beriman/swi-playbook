# GitHub Workflow

GitHub menyimpan kode, dokumentasi, histori keputusan, issue, pull request, patch log, dan audit perubahan. Workflow dipilih berdasarkan risk level.

## Sebelum Bekerja

1. Jalankan `git status`.
2. Baca instruksi repository dan dokumen domain.
3. Tentukan task owner, repository, branch, dan file scope.
4. Pastikan perubahan yang sudah ada dikenali sebagai milik task atau foreign work.
5. Periksa source of truth, issue/spec, risk level, dan acceptance criteria.

## Trusted Change Workflow

```text
Identifikasi perubahan kecil
→ Cek keselarasan dan risiko
→ Implementasi
→ Verification
→ Commit/Merge
→ Patch Log
→ Laporan
```

Gunakan hanya jika seluruh syarat [Trusted Changes](../01-governance/trusted-changes.md) terpenuhi. Branch pendek disarankan untuk kerja remote atau paralel.

## Medium/High Risk Workflow

```text
Issue atau Spec
→ Risk Classification
→ Branch
→ Implementasi
→ Test/Verification
→ Draft PR
→ Review
→ Approval
→ Merge
→ Deploy
→ Live Verification
→ Patch Log
```

Untuk high/critical risk, sertakan ADR atau decision record, implementation plan, verification plan, rollback plan, audit trail, dan approval manusia.

## Issue atau Spec

Issue menjelaskan problem, outcome, scope, risiko, acceptance criteria, dan reference. Implementation spec menambahkan file scope, langkah teknis, commands, rollback, serta authority limits.

Jangan memulai implementasi material dari satu kalimat chat tanpa artifact yang cukup.

## Branch

Gunakan nama deskriptif, misalnya:

```text
docs/playbook-v0.1-foundation
feat/store-order-state-machine
fix/marketplace-shipping-status
```

Prefix dapat mengikuti kebijakan repository, termasuk `agent/` untuk branch yang dikerjakan agen. Medium/high risk tidak boleh didorong langsung ke `main`.

## Commit

- commit hanya file dalam task scope;
- gunakan pesan ringkas yang menjelaskan intent;
- hindari mencampur refactor tak terkait;
- jangan memasukkan secret, credential, atau data produksi;
- verification tidak harus menjadi commit terpisah, tetapi hasilnya harus tercatat.

Contoh:

```text
docs: establish SWI Playbook foundation
fix: prevent duplicate order reconciliation
```

## Pull Request

PR minimal memuat:

- ringkasan dan alasan;
- risk level;
- scope dan out of scope;
- perubahan penting;
- verification command serta hasil;
- impact dan known limitations;
- rollback plan bila relevan;
- issue, PRD, ADR, dan patch log terkait;
- screenshot untuk perubahan visual bila perlu.

Draft PR digunakan saat perubahan belum siap diterima. Status ready tidak berarti otomatis mendapat approval.

## Review dan Approval

Reviewer memeriksa diff, acceptance criteria, failure mode, permission, data, test, dan operational readiness. Approver menerima risiko sesuai [hak keputusan](../01-governance/decision-rights.md).

Perubahan low risk dapat di-merge melalui trusted change policy. Medium/high risk menunggu review dan approval yang diwajibkan.

## Merge, Deploy, dan Verification

Setelah merge:

1. pastikan branch utama memuat commit yang dimaksud;
2. jalankan build/deploy sesuai repository;
3. lakukan live verification jika ada runtime;
4. periksa monitoring atau error awal;
5. perbarui patch log dengan PR dan commit;
6. laporkan limitation dan next action.

## Dilarang

- menimpa foreign changes;
- `reset`, `stash`, force-push, atau penghapusan pekerjaan lain tanpa instruksi;
- mendorong medium/high change langsung ke `main`;
- menyatakan selesai hanya karena PR sudah di-merge;
- menggabungkan perubahan ketika konflik besar atau keputusan strategis belum selesai.
