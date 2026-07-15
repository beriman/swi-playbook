# Standar PRD

Product Requirements Document (PRD) menjelaskan mengapa produk/perubahan dibuat, siapa yang dilayani, apa yang termasuk, aturan apa yang berlaku, dan bagaimana hasil diterima.

## Kapan Menggunakan PRD

Gunakan PRD untuk produk baru, fitur material, workflow lintas peran/sistem, atau perubahan yang membutuhkan keputusan bisnis. Perubahan kecil dapat memakai issue terstruktur.

## Bagian Wajib

1. **Document Control** — owner, status, version, tanggal, repository, dan link.
2. **Context** — current state dan alasan sekarang.
3. **Problem Statement** — pengguna, masalah, dan konsekuensi.
4. **Product Objective** — outcome yang ingin dicapai.
5. **Alignment with SWI** — hubungan dengan cita-cita besar.
6. **Pillar Contribution** — pilar utama, kolaborator, dan nilai per pilar.
7. **Users and Roles** — user, operator, approver, permission.
8. **Scope** — yang dibangun.
9. **Out of Scope** — yang sengaja tidak dibangun.
10. **User Journeys** — normal, exception, dan recovery journey.
11. **Functional Requirements** — behavior dengan ID.
12. **Business Rules** — perhitungan, state, permission, approval, exception.
13. **Non-Functional Requirements** — security, privacy, performance, accessibility, auditability, maintainability.
14. **Data and Integrations** — source of truth, entities, contract, API/event, retention.
15. **Analytics and Success Metrics** — baseline, target, event, review period.
16. **Risks** — impact, likelihood, mitigation, owner.
17. **Rollout** — tahap rilis, migration, rollback.
18. **Operations** — owner, monitoring, SOP, exception handling.
19. **Acceptance Criteria** — pernyataan testable.
20. **Open Decisions** — pertanyaan, owner, dan target keputusan.
21. **Patch Log Requirement** — path dan kapan diperbarui.

Gunakan [template PRD](../templates/prd-template.md).

## Requirement ID

Gunakan ID stabil:

```text
FR-001   Functional Requirement
BR-001   Business Rule
NFR-001  Non-Functional Requirement
AC-001   Acceptance Criterion
```

ID membantu menghubungkan PRD, test, issue, dan evidence. Jangan mengubah arti requirement accepted tanpa versioning/catatan perubahan.

## Pillar Contribution

PRD tidak cukup hanya memilih satu label pilar. Jelaskan nilai:

| Pilar | Posisi | Nilai | Owner/metric terkait |
| --- | --- | --- | --- |
| Retail | Utama | contoh: transaksi dan layanan toko | order completion |
| Komunitas | Kolaborator | contoh: partisipasi member | active participants |

Kontribusi tidak otomatis berarti semua pilar memiliki ownership yang sama.

## Business Rules

Business rule harus eksplisit dan testable. Jangan mengarang threshold finansial, profit sharing, permission, atau state transition. Masukkan sebagai Open Decision sampai disetujui.

## Status Dokumen

- Draft;
- In Review;
- Approved;
- Implementing;
- Released;
- Superseded;
- Deprecated.

Status `Approved` menyebut approver dan tanggal. Perubahan material setelah approval memerlukan changelog/review ulang.

## Hubungan dengan ADR

PRD mendefinisikan product outcome dan requirement. ADR mencatat keputusan architecture yang material. PRD boleh merujuk ADR, tetapi tidak perlu menyalin seluruh alasannya.
