# ADR-0001 — Empat Pilar sebagai Kerangka Ekosistem SWI

- **ID:** ADR-0001
- **Status:** Accepted
- **Tanggal:** 2026-07-15
- **Owner:** Beriman / Product Owner SWI
- **Decision approver:** Beriman
- **Supersedes:** N/A
- **Superseded by:** N/A
- **Related links:** [Keselarasan SWI](../../00-foundation/003-swi-alignment.md), [SystemSWI](https://systemswi.vercel.app/), [Tentang SWI](https://systemswi.vercel.app/about)

## Konteks

SWI menjalankan produk, program, dan aktivitas yang saling mendukung. Struktur yang terlalu kaku dapat membuat Media, Komunitas, Event, dan Retail bekerja sebagai unit terpisah, padahal nilai SWI muncul dari hubungan antarpilar.

## Keputusan

SWI menggunakan empat pilar utama:

1. Media;
2. Komunitas;
3. Event;
4. Retail.

Setiap produk atau aktivitas material mencatat satu pilar utama sebagai fokus dan dapat mencatat beberapa pilar kolaborator. Pilar tidak diperlakukan sebagai silo kaku.

## Alasan

Model ini mempertahankan fokus dan ownership tanpa menghilangkan kontribusi lintas ekosistem. Fragrantions, sensasiwangi.id, SWI Store, marketplace, dan Media dapat dipahami dari outcome utamanya sekaligus hubungan nilai dengan pilar lain.

## Alternatif yang Dipertimbangkan

### Satu Unit untuk Setiap Produk

- **Kelebihan:** ownership terlihat sederhana.
- **Kekurangan:** kontribusi lintas ekosistem hilang dan duplikasi mudah terjadi.
- **Alasan tidak dipilih:** tidak sesuai dengan cara produk SWI saling menguatkan.

### Semua Aktivitas Dianggap Lintas Pilar Tanpa Pilar Utama

- **Kelebihan:** fleksibel.
- **Kekurangan:** fokus, owner, metric, dan pelaporan menjadi kabur.
- **Alasan tidak dipilih:** kolaborasi tetap membutuhkan pusat tanggung jawab.

## Konsekuensi Positif

- fokus utama dan kolaborasi dapat terlihat bersamaan;
- PRD dan dashboard dapat menunjukkan nilai lintas ekosistem;
- produk tidak perlu dipaksa masuk silo.

## Konsekuensi Negatif

- klasifikasi membutuhkan penilaian dan dapat berubah antar-increment;
- allocation biaya/pendapatan tidak dapat disimpulkan hanya dari label pilar;
- data model perlu mendukung lebih dari satu pilar.

## Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi | Owner |
| --- | --- | --- | --- |
| Semua pilar diberi status utama | fokus hilang | satu pilar utama per outcome material | Product Owner |
| Label dipakai untuk alokasi finansial tanpa aturan | laporan salah | gunakan business rule terpisah dan approval | Finance/Product Owner |
| Pilar menjadi silo | kolaborasi terhambat | PRD wajib menjelaskan pilar kolaborator | Product owner produk |

## Rollback atau Revisit Condition

Keputusan ditinjau ulang jika visi/misi resmi berubah, empat pilar diubah melalui keputusan perusahaan, atau model ini terbukti menghambat ownership. Revisi dilakukan melalui ADR baru; histori ADR ini dipertahankan.

## Acceptance Record

- **Approver:** Beriman
- **Tanggal:** 2026-07-15
- **Catatan:** Empat pilar dan prinsip lintas pilar diberikan sebagai konteks resmi SWI Playbook v0.1.
