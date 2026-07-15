# Patch Log — SWI Playbook v0.1 Foundation

- **Versi/release:** v0.1.0
- **Tanggal:** 2026-07-15
- **Status:** Released setelah merge ke `main`
- **Human owner:** Beriman / Product Owner SWI
- **Agent/implementer:** ChatGPT Work / Codex
- **Repository:** `beriman/swi-playbook`
- **Branch:** `agent/bootstrap-playbook-v0.1`
- **Related issue/PR/commit:** [PR #1](https://github.com/beriman/swi-playbook/pull/1), [implementation commit `f8fc426`](https://github.com/beriman/swi-playbook/commit/f8fc426ceaf21436b755d6b49d93bfd35677ffb9)

## Ringkasan

Menyelesaikan fondasi resmi cara kerja manusia dan AI di ekosistem SWI. Perubahan menyatukan draft bootstrap, menormalkan bahasa Indonesia, mengganti istilah yang tidak resmi dengan SystemSWI, dan menambahkan governance, workflow, template, ADR, patch log, serta Definition of Done yang dapat langsung digunakan.

## Added

- keselarasan cita-cita dan empat pilar SWI;
- model pilar utama dan pilar kolaborator;
- decision rights serta klasifikasi risiko/approval;
- trusted change policy;
- GitHub, AI handoff, emergency, dan concurrent-work workflow;
- standar peran ChatGPT, ChatGPT Work, Codex, dan HemuHemu;
- engineering dan product standards;
- template ide, PRD, ADR, issue, handoff, patch log, dan implementation spec;
- empat ADR foundation yang merekam keputusan yang telah disepakati;
- struktur patch log berbasis tanggal.
- konfigurasi Markdown lint untuk menjaga konsistensi dokumen.

## Changed

- README menjadi navigasi utama playbook berbahasa Indonesia;
- draft purpose, scope, principles, roles, idea-to-release, AI roles, Definition of Done, dan PRD disempurnakan;
- referensi arah perusahaan dinormalisasi ke SystemSWI;
- posisi HemuHemu dijelaskan sebagai runtime AI/automation layer pada Hermes Agent;
- verification evidence menjadi syarat completion.

## Fixed

- menghapus campuran bahasa pada dokumen utama;
- menghilangkan istilah organisasi yang tidak konsisten;
- menghindari empat pilar sebagai silo;
- menghilangkan ketergantungan pada keputusan yang hanya tersimpan di chat;
- tidak menetapkan batas nominal keuangan yang belum disetujui.

## Security

- menambahkan prinsip least privilege, secret handling, high-risk domain, approval, audit trail, dan repository safety;
- tidak ada secret, credential, data produksi, source code aplikasi, atau konfigurasi produksi yang ditambahkan.

## Verification

| Check/command | Result | Evidence/catatan |
| --- | --- | --- |
| `git diff --cached --check` | PASS | tidak ada whitespace error |
| `markdownlint-cli2` | PASS | 48 file Markdown, 0 error |
| pencarian penamaan tidak resmi | PASS | 0 temuan; nama resmi `SystemSWI` digunakan |
| pemeriksaan relative links | PASS | seluruh link internal menunjuk path yang ada |
| pemeriksaan struktur dan file kosong | PASS | 43 path wajib tersedia; 48 file Markdown berisi konten substantif |
| review acceptance criteria task | PASS | 17 pemeriksaan utama lulus |
| pemeriksaan rujukan resmi | PASS | SystemSWI, halaman About, dan kedua repository merespons HTTP 200 |
| pemeriksaan pola credential | PASS | tidak ada secret/credential literal terdeteksi pada Markdown |

## Impact

- **Pengguna/operator:** memiliki rujukan kerja dan approval yang lebih jelas.
- **Sistem/data:** dokumentasi saja; tidak mengubah runtime, database, transaksi, atau source of truth.
- **Pilar:** berlaku lintas Media, Komunitas, Event, dan Retail.

## Known Limitations

- batas nominal approval keuangan masih Open Decision;
- default durasi lock lintas repository masih Open Decision;
- playbook belum mendefinisikan SOP khusus setiap produk;
- integrasi otomatis playbook ke SystemSWI belum dibuat;
- SWI Store OS Blueprint tidak termasuk scope task ini.

## Lessons Learned

- draft bootstrap berguna dan dapat dipertahankan, tetapi memerlukan normalisasi terhadap sumber resmi terbaru;
- pilar utama dan kolaborator memberi fokus tanpa membentuk silo;
- patch log perlu memuat repository safety agar agent work dapat diaudit.

## Next

1. Sosialisasikan v0.1 dan gunakan template pada satu task nyata.
2. Putuskan owner pemeliharaan dan cadence review playbook.
3. Selesaikan Open Decision batas approval keuangan dan default lock bila data resmi tersedia.
4. Mulai **SWI Store OS Blueprint v0.1** sebagai task terpisah.

## Repository Safety

- **Task owner:** ChatGPT Work / Codex untuk Beriman
- **File scope:** seluruh dokumentasi `swi-playbook` pada branch bootstrap; tidak menyentuh repository SystemSWI
- **Lock acquired/released/expiry:** tidak ada lock tool aktif; status dan branch diperiksa sebelum perubahan
- **Foreign changes:** tidak ada; branch bersih saat task dimulai
- **Concurrency status:** aman, tidak ada `BLOCKED_BY_CONCURRENT_WORK`
