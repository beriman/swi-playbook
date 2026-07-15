# Workflow Idea-to-Release

```text
Ide
→ Capture
→ Research
→ Decision
→ Product Definition
→ Architecture Review
→ Delivery Planning
→ Implementation
→ Verification
→ Approval/Release
→ Learn
```

Tidak semua ide harus menjadi produk. Workflow ini memastikan energi implementasi diberikan setelah masalah, nilai, dan risikonya cukup dipahami.

## 1. Ide

Ide dapat berasal dari pelanggan, komunitas, operator, event, retail, data, pimpinan, atau AI. Pada tahap ini ide boleh belum rapi, tetapi originator dan konteks awal harus diketahui.

Contoh: pengunjung SWI Store membutuhkan cara lebih cepat memilih bahan aroma.

## 2. Capture

Catat ide dalam [template ide](../templates/idea-template.md), issue, atau project note resmi.

Minimum:

- masalah atau peluang;
- pengguna terdampak;
- outcome yang diharapkan;
- pilar utama dan kemungkinan pilar kolaborator;
- urgency, constraint, dan originator.

Chat dapat menjadi sumber awal, tetapi capture harus berada di artifact yang dapat ditemukan kembali.

## 3. Research

Pahami current state sebelum memilih solusi:

- baca source of truth dan dokumentasi terbaru;
- kumpulkan evidence pengguna dan operasi;
- bedakan fakta, asumsi, dan hipotesis;
- identifikasi alternatif, dependency, risiko, serta sistem terdampak;
- periksa apakah kapabilitas serupa sudah ada.

Output dapat berupa research note pada issue atau bagian konteks PRD.

## 4. Decision

Product Owner memilih salah satu:

- **reject:** tidak dikerjakan, dengan alasan;
- **park:** disimpan sampai kondisi tertentu;
- **explore:** butuh riset atau prototype tambahan;
- **approve for definition:** layak didefinisikan sebagai produk/perubahan.

Keputusan material dicatat. Approval untuk product definition bukan otomatis approval deployment.

## 5. Product Definition

Buat atau perbarui PRD. Tetapkan masalah, tujuan, users, scope, out of scope, journey, requirement, business rules, data/integration, risk, metrics, operations, dan acceptance criteria.

Gunakan PRD penuh bila lintas sistem atau material. Issue terstruktur cukup untuk perubahan kecil.

## 6. Architecture Review

Tinjau:

- source of truth dan ownership data;
- state transition dan idempotency;
- integration dan failure mode;
- permission, privacy, security, dan audit trail;
- deployment, migration, monitoring, serta rollback;
- dampak lintas repository dan pilar.

Buat ADR hanya untuk keputusan material yang benar-benar dipilih. Jangan menjadikan opsi teknis yang belum disetujui sebagai keputusan.

## 7. Delivery Planning

Pecah scope menjadi increment yang dapat diimplementasikan dan diverifikasi. Untuk setiap task, catat owner, repository, branch, file scope, dependency, risk level, acceptance criteria, verification command, dan expected output.

## 8. Implementation

Ikuti [GitHub workflow](github-workflow.md) dan [concurrent work](concurrent-work.md). Implementasi harus fokus pada scope. Deviasi material dikembalikan ke owner sebelum diteruskan.

## 9. Verification

Periksa acceptance criteria menggunakan evidence:

- automated test;
- lint/typecheck/build;
- review manual;
- screenshot atau browser flow;
- query atau log yang aman;
- dry-run;
- live verification setelah deploy.

Catat failure, limitation, dan hal yang belum diverifikasi. “Sudah dibuat” bukan evidence.

## 10. Approval/Release

Approval mengikuti [risk classification](../01-governance/risk-and-approval.md). Catat release, migration, rollback readiness, owner operasional, dan patch log. High/critical change tidak boleh dirilis berdasarkan approval AI saja.

## 11. Learn

Bandingkan outcome aktual dengan tujuan dan metrics. Catat:

- apa yang berhasil;
- apa yang gagal atau mengejutkan;
- feedback pengguna/operator;
- incident dan exception;
- perubahan yang perlu dilakukan pada PRD, ADR, SOP, test, atau playbook.

Pembelajaran yang tidak mengubah artifact akan mudah hilang.
