# Patch Log — Enforcement dan Pemeliharaan Playbook

- **Versi/release:** v0.1.1
- **Tanggal:** 2026-07-15
- **Status:** Draft; menjadi Released setelah merge ke `main`
- **Human owner:** Beriman / Product Owner SWI
- **Agent/implementer:** Codex
- **Repository:** `beriman/swi-playbook`
- **Branch:** `agent/playbook-enforcement-maintenance`
- **Related issue/PR/commit:** [Issue #2](https://github.com/beriman/swi-playbook/issues/2), [PR #3](https://github.com/beriman/swi-playbook/pull/3), [implementation commit `80cf947`](https://github.com/beriman/swi-playbook/commit/80cf947d2f94b9846708c3b939cc53f8cee7a723)

## Ringkasan

Menjadikan kualitas SWI Playbook dapat diperiksa otomatis pada setiap pull request dan push ke `main`, menyediakan entry point ringkas bagi agen, mengurangi overhead patch log untuk maintenance kecil, serta menetapkan ownership dan cadence review.

## Added

- GitHub Actions untuk Markdown lint dan policy checks;
- verifier repository untuk internal links, penamaan resmi, credential patterns, file kosong, dan minimum structure;
- self-test untuk kontrol utama verifier;
- `AGENTS.md` sebagai entry point Codex, HemuHemu, dan agen lain;
- governance pemeliharaan Playbook dan ADR-0005.

## Changed

- perubahan maintenance kecil dikumpulkan dalam log bulanan;
- perubahan bermakna tetap menggunakan patch log tersendiri;
- Beriman ditetapkan sebagai Product Owner Playbook;
- ChatGPT Work atau HemuHemu dapat menjadi maintainer operasional sesuai task dan authority limits;
- review rutin ditetapkan paling sedikit setiap 3 bulan dengan trigger insidental;
- visi dan misi tetap dirujuk ke SystemSWI dan tidak diduplikasi di Playbook.

## Fixed

- menghilangkan ketergantungan pada pemeriksaan manual saat satu PR saja;
- menutup Open Decision mengenai owner dan cadence pemeliharaan;
- mengurangi risiko satu file patch log dibuat untuk setiap typo atau perubahan format kecil.

## Security

- menambahkan pemeriksaan credential patterns pada seluruh file teks yang dilacak Git;
- tidak ada perubahan pada authentication, authorization, secret, data, deployment, atau runtime produksi;
- pemeriksaan pola bersifat guardrail dan tidak menggantikan secret scanning khusus dari platform.

## Verification

| Check/command | Result | Evidence/catatan |
| --- | --- | --- |
| `node --check scripts/verify-playbook.mjs` | PASS | sintaks verifier valid |
| `node scripts/verify-playbook.mjs --self-test` | PASS | fixture penamaan, credential, dan link terdeteksi |
| `node scripts/verify-playbook.mjs` | PASS | 55 file terlacak, 52 Markdown, dan 55 minimum paths lulus |
| `npx --yes markdownlint-cli2@0.23.0 '**/*.md' '#node_modules' '#.git'` | PASS | 52 file Markdown, 0 error |
| `git diff --cached --check` | PASS | tidak ada whitespace error |
| GitHub Actions `Documentation quality` | NOT RUN | dijalankan pada pull request |

## Impact

- **Pengguna/operator:** memperoleh aturan pemeliharaan yang lebih ringan dan jelas.
- **Sistem/data:** dokumentasi dan CI repository saja; tidak mengubah SystemSWI, data, atau runtime produk.
- **Pilar:** kontrol bersama berlaku lintas Media, Komunitas, Event, dan Retail.

## Known Limitations

- workflow menghasilkan status check otomatis, tetapi ruleset untuk menjadikannya required check belum ditetapkan dalam perubahan ini;
- credential-pattern scan bersifat heuristik dan bukan pengganti GitHub secret scanning;
- external links diperiksa dalam review pemeliharaan, bukan sebagai blocker CI, agar gangguan jaringan tidak memblokir setiap PR;
- batas nominal approval keuangan dan default expiry lock lintas repository tetap Open Decision.

## Lessons Learned

- kontrol yang dapat dijalankan lokal dan di GitHub mengurangi ketergantungan pada disiplin satu agen;
- patch record perlu proporsional terhadap dampak perubahan;
- ownership manusia dan maintainer operasional AI harus dipisahkan secara eksplisit.

## Next

1. Pertimbangkan GitHub ruleset yang menjadikan `Documentation quality` sebagai required check.
2. Jadwalkan review Playbook berikutnya paling lambat 2026-10-15.
3. Mulai **SWI Store OS Blueprint v0.1** sebagai task terpisah.

## Repository Safety

- **Task owner:** Codex untuk Beriman
- **File scope:** workflow, verifier, entry point agen, governance, navigasi, ADR, dan patch record terkait task
- **Lock acquired/released/expiry:** tidak ada lock tool aktif; branch dan status diperiksa sebelum perubahan
- **Foreign changes:** tidak ada; seluruh perubahan pada branch berasal dari task ini
- **Concurrency status:** aman, tidak ada `BLOCKED_BY_CONCURRENT_WORK`
