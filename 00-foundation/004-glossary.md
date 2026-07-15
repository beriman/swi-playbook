# 004 — Glosarium

Istilah teknis dipertahankan dalam bahasa Inggris apabila lebih umum, tetapi maknanya harus konsisten.

| Istilah | Arti dalam SWI Playbook |
| --- | --- |
| Acceptance criteria | kondisi yang dapat diuji untuk menerima suatu hasil |
| Acceptance record | catatan bahwa hasil telah diperiksa dan diterima oleh owner yang berwenang |
| ADR | Architecture Decision Record; catatan keputusan arsitektur atau lintas-sistem yang material |
| Agent | AI yang menjalankan peran dan tool dalam batas kewenangan tertentu |
| Audit trail | jejak siapa melakukan apa, kapan, berdasarkan keputusan mana, dan dengan hasil apa |
| Branch | jalur perubahan Git yang terpisah dari branch utama |
| Business rule | aturan bisnis eksplisit mengenai perhitungan, state, approval, permission, atau pengecualian |
| ChatGPT Work | lingkungan ChatGPT yang dapat bekerja dengan connected workspace dan artifact |
| Codex | pelaksana engineering yang membaca repository, mengubah kode/dokumen, menguji, dan menyiapkan PR |
| Data contract | kesepakatan struktur, arti, source, ownership, serta perubahan data antar-sistem |
| Definition of Done | daftar syarat agar pekerjaan boleh dinyatakan selesai |
| Dry-run | simulasi tanpa menerapkan mutasi produksi |
| Evidence | bukti verification, misalnya output test, log, screenshot, query, atau acceptance record |
| Handoff | serah-terima tujuan, konteks, batas, dan artifact kepada manusia atau AI lain |
| HemuHemu | runtime AI/automation layer SWI yang berjalan pada Hermes Agent di VPS SWI |
| Human owner | orang yang bertanggung jawab atas keputusan atau hasil tertentu |
| Idempotency | sifat operasi yang aman diulang tanpa menghasilkan dampak ganda yang tidak diinginkan |
| Issue | unit kerja atau pencatatan masalah di GitHub |
| MVP | rilis bernilai terkecil yang aman untuk menguji nilai nyata |
| Open Decision | keputusan yang belum disetujui; tidak boleh diperlakukan sebagai business rule final |
| Patch log | catatan perubahan yang mudah dipahami manusia dan agen; bukan pengganti Git history |
| Pilar kolaborator | pilar lain yang berkontribusi atau menerima nilai dari aktivitas |
| Pilar utama | fokus atau kontribusi terbesar suatu aktivitas |
| PRD | Product Requirements Document; definisi masalah, tujuan, ruang lingkup, requirement, dan penerimaan produk |
| Pull request (PR) | permintaan untuk meninjau dan menggabungkan perubahan branch |
| Rollback | tindakan mengembalikan kondisi ke keadaan aman sebelumnya |
| Source of truth | sumber yang berwenang untuk domain data atau keputusan tertentu |
| SystemSWI | pusat informasi, pengawasan, dan kendali operasional ekosistem SWI |
| Trusted change | perubahan low risk yang aman, reversible, selaras, dan dapat diproses dengan approval ringan |
| Verification | pemeriksaan terhadap acceptance criteria dengan evidence |

Istilah baru yang berdampak pada business rules atau data contract harus didefinisikan di dokumen pemilik domain, lalu ditambahkan di sini bila dipakai lintas ekosistem.
