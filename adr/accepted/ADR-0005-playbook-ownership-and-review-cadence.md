# ADR-0005 — Ownership dan Cadence Pemeliharaan SWI Playbook

- **ID:** ADR-0005
- **Status:** Accepted
- **Tanggal:** 2026-07-15
- **Owner:** Beriman / Product Owner SWI
- **Decision approver:** Beriman
- **Supersedes:** N/A
- **Superseded by:** N/A
- **Related links:** [Issue #2](https://github.com/beriman/swi-playbook/issues/2), [Pemeliharaan Playbook](../../01-governance/playbook-maintenance.md)

## Konteks

SWI Playbook v0.1 telah memiliki fondasi, tetapi owner pemeliharaan dan jadwal review belum final. Tanpa owner dan cadence, link, role, tool, serta aturan berisiko menjadi usang.

## Keputusan

1. Beriman menjadi Product Owner SWI Playbook.
2. ChatGPT Work atau HemuHemu menjadi maintainer operasional sesuai task dan authority limits.
3. Review rutin dilakukan paling sedikit setiap 3 bulan.
4. Review insidental dilakukan setelah insiden besar, perubahan struktur perusahaan, atau penambahan AI/tool baru. Perubahan source of truth dan governance material juga menjadi trigger.
5. Visi dan misi tetap berada di SystemSWI; Playbook hanya menjaga link dan ringkasan keselarasan.

## Alasan

Product Owner manusia menjaga akuntabilitas strategis. Maintainer AI membantu konsistensi dan pekerjaan operasional tanpa memperoleh kewenangan permanen. Siklus tiga bulan cukup rutin untuk mendeteksi drift tanpa menciptakan pekerjaan review bulanan yang berlebihan.

## Alternatif yang Dipertimbangkan

### Tanpa Cadence Tetap

- **Kelebihan:** tidak ada jadwal administratif.
- **Kekurangan:** drift baru terlihat setelah masalah terjadi.
- **Alasan tidak dipilih:** Playbook digunakan oleh manusia dan AI sehingga freshness perlu dijaga proaktif.

### AI sebagai Owner Penuh

- **Kelebihan:** maintenance dapat lebih otomatis.
- **Kekurangan:** AI tidak dapat menerima tanggung jawab strategis perusahaan.
- **Alasan tidak dipilih:** bertentangan dengan human accountability.

### Menyalin Visi dan Misi ke Playbook

- **Kelebihan:** seluruh konteks tampak berada di satu repository.
- **Kekurangan:** menciptakan risiko dua versi yang berbeda.
- **Alasan tidak dipilih:** SystemSWI sudah menjadi source of truth perusahaan.

## Konsekuensi Positif

- ownership dan jalur eskalasi jelas;
- review memiliki interval dan trigger;
- AI dapat membantu maintenance dalam batas task;
- visi dan misi tetap memiliki satu source of truth.

## Konsekuensi Negatif

- Product Owner perlu memastikan review benar-benar dijadwalkan;
- review rutin tetap membutuhkan evidence meskipun hasilnya `no change`;
- cadence dapat perlu disesuaikan ketika ekosistem tumbuh lebih cepat.

## Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi | Owner |
| --- | --- | --- | --- |
| Review terlewat | dokumen usang | issue/reminder dan next review window | Product Owner |
| AI memperluas scope | keputusan tanpa kewenangan | authority limits dan human approval | Task owner |
| Link resmi berubah | alignment sulit diverifikasi | cek link pada review rutin/insidental | Maintainer operasional |

## Rollback atau Revisit Condition

Keputusan ditinjau jika ownership perusahaan berubah, cadence tiga bulan terbukti terlalu lambat/berat, atau terdapat sistem governance baru. Revisi dibuat melalui ADR baru.

## Acceptance Record

- **Approver:** Beriman
- **Tanggal:** 2026-07-15
- **Catatan:** Ownership dan cadence ditetapkan melalui feedback Product Owner setelah review v0.1.
