# Peran dan Tanggung Jawab

Satu orang atau AI dapat menjalankan lebih dari satu peran, tetapi setiap tindakan harus jelas sedang dilakukan dalam kapasitas apa. Untuk tindakan kritis, pembuat dan pemberi approval sebaiknya dipisahkan.

## Beriman / Product Owner

Beriman memegang arah produk dan prioritas bisnis SWI.

Tanggung jawab:

- menentukan arah, outcome, dan prioritas;
- memutuskan trade-off strategis;
- menyetujui perubahan kritis;
- menetapkan atau mendelegasikan human owner;
- menerima atau menolak hasil bisnis;
- menyelesaikan Open Decision yang berada dalam kewenangannya.

## Tim Manusia dan Operator

Tim manusia mengerjakan fungsi bisnis, memberi konteks lapangan, menangani pengecualian, dan menjaga kualitas data.

Operator:

- menjalankan SOP dan workflow produksi;
- memeriksa output automation yang memerlukan penilaian manusia;
- melaporkan error, data janggal, dan pengecualian;
- tidak melewati approval hanya karena sistem memungkinkan.

## Reviewer

Reviewer melakukan pemeriksaan independen terhadap requirement, risiko, keamanan, evidence, dan kesiapan operasional. Reviewer tidak boleh hanya mengulang klaim implementer.

## ChatGPT / Enterprise dan Product Architect

ChatGPT membantu menerjemahkan visi perusahaan menjadi arah produk dan architecture yang koheren.

Tanggung jawab:

- memahami visi, misi, cita-cita, dan empat pilar SWI;
- mengembangkan atau meninjau PRD, ADR, business rules, dan data contract;
- mengidentifikasi dependency, konflik lintas sistem, serta risiko;
- menyiapkan spec yang dapat dieksekusi oleh Codex atau HemuHemu;
- menjaga konsistensi antarproyek;
- menandai fakta, asumsi, rekomendasi, dan Open Decision secara terpisah.

Batas: ChatGPT dapat merekomendasikan dan menyusun artifact, tetapi tidak memberikan approval bisnis kepada dirinya sendiri. ChatGPT juga tidak berjalan terus-menerus sebagai background daemon.

## ChatGPT Work

ChatGPT Work bekerja dengan connected workspace dan artifact yang tersedia.

Tanggung jawab:

- mengembangkan dokumen dan product work;
- membantu koordinasi artifact serta proyek;
- membuat prototype seperti `/site` bila sesuai dengan kebutuhan;
- memperbarui repository apabila koneksi dan kewenangan mendukung;
- membawa hasil percakapan ke artifact yang tahan lama.

Batas: akses konektor tidak otomatis berarti kewenangan untuk mengubah data atau mengirim tindakan eksternal.

## Codex

Codex adalah pelaksana engineering.

Tanggung jawab:

- membaca repository dan instruksi lokal sebelum bekerja;
- mengimplementasikan issue atau spec dalam file scope yang jelas;
- menjalankan testing, debugging, refactor, dan verification;
- membuat branch, commit, dan pull request;
- menjaga pekerjaan agen lain dan melaporkan blocker;
- mencatat deviasi, limitation, dan evidence.

Batas: Codex tidak boleh memperluas scope strategis, menimpa perubahan asing, atau menganggap perubahan kritis telah disetujui tanpa record.

## HemuHemu

HemuHemu adalah runtime AI/automation layer yang berjalan pada Hermes Agent di VPS SWI.

Kemampuan yang dapat digunakan sesuai workflow dan permission:

- cron job;
- terminal dan file;
- browser;
- repository;
- build dan test;
- commit dan push;
- monitoring;
- Telegram dan Discord;
- Google Sheets;
- deployment verification.

HemuHemu mengeksekusi spec, workflow, monitoring, dan automation yang telah diberi batas. Ia wajib mencatat tindakan, menangani retry/idempotency, dan meminta approval pada titik yang ditentukan.

Batas: HemuHemu tidak boleh memperluas kewenangan sendiri, melakukan tindakan destruktif, mengubah source of truth, atau melewati approval manusia.

## SystemSWI

SystemSWI adalah pusat informasi, pengawasan, dan kendali operasional ekosistem SWI. Dashboard atau Command Center merupakan fungsi di dalam SystemSWI, bukan produk baru yang berdiri terpisah.

SystemSWI membantu menyediakan visibility, approval queue, status operasional, risiko, dan audit. Posisi ini tidak otomatis menjadikannya database utama semua domain.

## GitHub

GitHub digunakan sebagai:

- source of truth kode dan dokumentasi;
- histori keputusan;
- issue dan backlog;
- branch, commit, dan pull request;
- patch log;
- audit perubahan.

GitHub tidak digunakan untuk menyimpan secret atau data transaksi yang seharusnya berada di sistem operasional.

## Pemisahan Peran Kritis

Creator–approver separation harus dijaga bila praktis untuk authentication, authorization, payment, refund, settlement, ledger, perubahan permission, destructive migration, dan deployment berisiko tinggi. Jika tim kecil mengharuskan orang yang sama menjalankan beberapa peran, approval dan verification evidence harus tetap dipisahkan secara eksplisit dalam catatan.
