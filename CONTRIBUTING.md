# Berkontribusi pada SWI Playbook

Kontribusi harus membuat cara kerja SWI lebih jelas, dapat diterapkan, dan dapat diaudit.

## Sebelum Mengubah

1. baca [tujuan](00-foundation/000-purpose.md), [ruang lingkup](00-foundation/001-scope.md), dan [prinsip](00-foundation/002-guiding-principles.md);
2. jalankan `git status`;
3. identifikasi owner, branch, dan file scope;
4. periksa concurrent work;
5. klasifikasikan risiko;
6. pastikan perubahan tidak menciptakan kebijakan bisnis yang belum disetujui.

## Bahasa dan Gaya

- bahasa utama adalah bahasa Indonesia;
- istilah teknis Inggris boleh dipakai bila lebih umum;
- jelaskan istilah yang berpotensi membingungkan pada pemakaian pertama;
- gunakan kalimat langsung dan contoh dari ekosistem SWI;
- hindari klaim bombastis atau template korporat generik;
- jangan menyalin isi panjang antarfile; gunakan link;
- gunakan nama resmi **SystemSWI**.

## Memilih Artifact

- ide awal: [template ide](templates/idea-template.md);
- task: [template issue](templates/issue-template.md);
- product definition: [template PRD](templates/prd-template.md);
- keputusan material: [template ADR](templates/adr-template.md);
- serah-terima: [template handoff](templates/handoff-template.md);
- instruksi engineering: [implementation spec](templates/implementation-spec-template.md);
- perubahan: [template patch log](templates/patch-log-template.md).

## Workflow

- low risk: ikuti [Trusted Changes](01-governance/trusted-changes.md);
- medium/high risk: issue/spec, branch, verification, PR, review, approval, merge, dan patch log;
- jangan push medium/high risk langsung ke `main`;
- jangan `reset`, `stash`, overwrite, atau hapus foreign work.

## ADR

- gunakan ID berikutnya yang belum dipakai;
- jangan mengubah isi keputusan accepted secara diam-diam;
- perubahan keputusan dibuat sebagai ADR baru yang supersede ADR lama;
- jangan membuat ADR accepted untuk opsi yang belum disetujui.

## Verification Dokumentasi

Sebelum PR:

- jalankan `git diff --check`;
- periksa link internal;
- cari istilah/penamaan yang tidak konsisten;
- pastikan file tidak kosong dan navigasi diperbarui;
- review duplikasi serta kontradiksi;
- perbarui patch log.

## Pull Request

PR menjelaskan tujuan, risk level, scope, verification, impact, limitation, dan link artifact. Perubahan low-risk dapat di-merge melalui trusted change policy setelah verification. Perubahan strategis memerlukan human approval.

## Definition of Done

Gunakan [Definition of Done](04-engineering/definition-of-done.md). Perubahan belum selesai jika hanya file yang dibuat, tetapi evidence dan patch log belum tersedia.
