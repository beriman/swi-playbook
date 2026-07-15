# ADR-0003 — SystemSWI sebagai Pusat Informasi dan Pengawasan Ekosistem

- **ID:** ADR-0003
- **Status:** Accepted
- **Tanggal:** 2026-07-15
- **Owner:** Beriman / Product Owner SWI
- **Decision approver:** Beriman
- **Supersedes:** N/A
- **Superseded by:** N/A
- **Related links:** [Keselarasan SWI](../../00-foundation/003-swi-alignment.md), [SystemSWI](https://systemswi.vercel.app/), [repository SystemSWI](https://github.com/beriman/systemswi)

## Konteks

SWI membutuhkan tempat untuk melihat informasi, status operasional, approval, risiko, project health, dan aktivitas agent lintas ekosistem. Menjadikan setiap dashboard sebagai produk terpisah akan memecah visibility.

## Keputusan

SystemSWI adalah pusat informasi, pengawasan, dan kendali operasional ekosistem SWI. Dashboard atau Command Center adalah fungsi di dalam SystemSWI, bukan produk baru yang berdiri sendiri.

Keputusan ini tidak menetapkan SystemSWI sebagai database utama semua domain. Source of truth tetap mengikuti owner data yang telah disetujui.

## Alasan

SystemSWI telah berfungsi sebagai pusat modul dan dashboard operasional. Menempatkan Command Center di dalamnya menjaga satu pintu pengawasan tanpa memaksakan seluruh data dipindahkan.

## Alternatif yang Dipertimbangkan

### Command Center sebagai Produk Terpisah

- **Kelebihan:** dapat dikembangkan independen.
- **Kekurangan:** duplikasi akses, navigasi, ownership, dan integration.
- **Alasan tidak dipilih:** fungsi tersebut merupakan bagian alami SystemSWI.

### SystemSWI Menjadi Source of Truth Semua Domain

- **Kelebihan:** tampak terpusat.
- **Kekurangan:** memerlukan migrasi besar dan berisiko mengaburkan owner data.
- **Alasan tidak dipilih:** belum diputuskan dan tidak diperlukan untuk fungsi pengawasan.

## Konsekuensi Positif

- visibility lintas pilar berada di satu pusat;
- dashboard, approval, risiko, dan agent health dapat terhubung;
- sistem domain tetap modular.

## Konsekuensi Negatif

- SystemSWI harus menampilkan source dan freshness dengan jelas;
- integration dapat menghasilkan degraded/fallback state;
- permission lintas modul memerlukan governance ketat.

## Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi | Owner |
| --- | --- | --- | --- |
| Dashboard dianggap source utama | keputusan dari data stale | tampilkan source, freshness, dan fallback | SystemSWI owner |
| Scope SystemSWI membesar tanpa batas | maintenance sulit | modular boundary dan PRD per capability | Product Owner |
| Permission berlebihan | akses sensitif | role/permission review dan audit | Human owner |

## Rollback atau Revisit Condition

Keputusan ditinjau jika fungsi pengawasan membutuhkan boundary legal/teknis terpisah atau SystemSWI tidak lagi menjadi pusat operasional. Migrasi source of truth tetap memerlukan ADR terpisah.

## Acceptance Record

- **Approver:** Beriman
- **Tanggal:** 2026-07-15
- **Catatan:** Posisi SystemSWI dan Command Center ditetapkan dalam konteks resmi task.
