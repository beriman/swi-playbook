# ADR-0004 — Keputusan Penting Harus Memiliki Artifact Tahan Lama

- **ID:** ADR-0004
- **Status:** Accepted
- **Tanggal:** 2026-07-15
- **Owner:** Beriman / Product Owner SWI
- **Decision approver:** Beriman
- **Supersedes:** N/A
- **Superseded by:** N/A
- **Related links:** [Prinsip Panduan](../../00-foundation/002-guiding-principles.md), [Architecture Decisions](../../01-governance/architecture-decisions.md)

## Konteks

Percakapan membantu eksplorasi cepat, tetapi keputusan yang hanya hidup di chat sulit ditemukan, diverifikasi, dan diserahkan kepada manusia atau AI lain.

## Keputusan

Keputusan penting dianggap tuntas setelah dicatat di repository atau sistem pemilik domain sebagai dokumentasi, PRD, ADR, issue, patch log, SOP, data contract, atau acceptance record.

Chat dapat menjadi evidence pendukung atau asal konteks, tetapi bukan source of truth final.

## Alasan

Artifact tahan lama menyediakan owner, status, alasan, link implementasi, histori, dan kemampuan audit yang tidak dijamin oleh percakapan.

## Alternatif yang Dipertimbangkan

### Chat sebagai Arsip Utama

- **Kelebihan:** tidak memerlukan langkah tambahan.
- **Kekurangan:** sulit dicari lintas workspace, status ambigu, dan konteks mudah hilang.
- **Alasan tidak dipilih:** tidak memenuhi continuity dan auditability.

### Ringkasan Berkala Tanpa Link Keputusan

- **Kelebihan:** lebih mudah dibaca.
- **Kekurangan:** sulit menghubungkan keputusan dengan implementasi dan approval.
- **Alasan tidak dipilih:** ringkasan membantu, tetapi tidak cukup sendiri.

## Konsekuensi Positif

- keputusan dapat ditemukan dan ditinjau;
- handoff lebih akurat;
- implementation dan patch log dapat ditautkan;
- perubahan keputusan tetap memiliki histori.

## Konsekuensi Negatif

- memerlukan disiplin untuk memindahkan hasil chat;
- ada overhead ringan pada pekerjaan kecil;
- artifact dapat usang jika owner tidak memperbarui status.

## Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi | Owner |
| --- | --- | --- | --- |
| Dokumentasi tidak diperbarui | implementasi berbeda dari keputusan | Definition of Done dan PR review | Implementer/reviewer |
| Terlalu banyak artifact | navigasi sulit | gunakan artifact proporsional dan link | Product owner |
| Chat diperlakukan sebagai approval | high-risk action tanpa owner | decision rights dan acceptance record | Human owner |

## Rollback atau Revisit Condition

Format artifact dapat berubah bila tool atau workflow berkembang, tetapi prinsip durable decision record tetap berlaku kecuali digantikan keputusan resmi baru.

## Acceptance Record

- **Approver:** Beriman
- **Tanggal:** 2026-07-15
- **Catatan:** Keputusan penting tidak boleh hanya hidup di chat.
