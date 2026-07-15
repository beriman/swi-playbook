# ADR-0002 — SWI Playbook sebagai Pedoman Kerja Lintas Ekosistem

- **ID:** ADR-0002
- **Status:** Accepted
- **Tanggal:** 2026-07-15
- **Owner:** Beriman / Product Owner SWI
- **Decision approver:** Beriman
- **Supersedes:** N/A
- **Superseded by:** N/A
- **Related links:** [Tujuan](../../00-foundation/000-purpose.md), [Ruang Lingkup](../../00-foundation/001-scope.md)

## Konteks

Cara kerja SWI melibatkan manusia, beberapa produk, GitHub, workspace, spreadsheet, ChatGPT, Codex, dan runtime automation. Tanpa pedoman bersama, keputusan dan proses mudah terfragmentasi.

## Keputusan

SWI Playbook menjadi pedoman resmi untuk cara kerja lintas ekosistem: idea-to-release, governance, AI handoff, engineering, verification, risk/approval, dan pembelajaran.

Playbook tidak menggantikan visi/misi SystemSWI, dokumentasi produk, SOP khusus, source code, data transaksi, atau secret.

## Alasan

Satu pedoman lintas ekosistem memberi bahasa kerja yang konsisten sambil membiarkan setiap domain memiliki repository, data, dan SOP sendiri.

## Alternatif yang Dipertimbangkan

### Aturan Hanya di Setiap Repository

- **Kelebihan:** dekat dengan implementasi.
- **Kekurangan:** prinsip lintas sistem terduplikasi dan mudah bertentangan.
- **Alasan tidak dipilih:** SWI memerlukan fondasi bersama.

### Mengandalkan Chat dan Instruksi Per Task

- **Kelebihan:** cepat pada awalnya.
- **Kekurangan:** sulit ditemukan, tidak durable, dan rawan kehilangan konteks.
- **Alasan tidak dipilih:** tidak memenuhi auditability dan continuity.

## Konsekuensi Positif

- manusia dan AI memiliki rujukan bersama;
- handoff lebih konsisten;
- risk/approval dan Definition of Done dapat digunakan lintas proyek;
- aturan domain tetap berada dekat pemiliknya.

## Konsekuensi Negatif

- playbook perlu dipelihara agar tidak usang;
- ada risiko duplikasi jika dokumen produk menyalin seluruh playbook;
- konflik memerlukan governance yang jelas.

## Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi | Owner |
| --- | --- | --- | --- |
| Dokumen menjadi terlalu generik | tidak dipakai | gunakan contoh SWI dan template praktis | Product Owner/playbook maintainer |
| Playbook usang | keputusan salah | patch log, review, dan owner jelas | Playbook maintainer |
| Menggantikan SOP domain | boundary kabur | ruang lingkup eksplisit dan link ke owner domain | Product owner produk |

## Rollback atau Revisit Condition

Model ditinjau jika playbook tidak lagi dapat melayani kerja lintas ekosistem atau governance resmi berubah. Perubahan besar menggunakan ADR baru. Repository tidak dihapus karena histori keputusan tetap bernilai.

## Acceptance Record

- **Approver:** Beriman
- **Tanggal:** 2026-07-15
- **Catatan:** SWI Playbook v0.1 diminta sebagai fondasi resmi manusia dan AI.
