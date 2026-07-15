# 002 — Prinsip Panduan

## 1. Selaras dengan SWI

Setiap pekerjaan harus membantu SWI bergerak menuju kemandirian wewangian Indonesia. Requirement produk boleh lebih rinci, tetapi tidak boleh menciptakan arah perusahaan tandingan.

## 2. SWI adalah Ekosistem

Media, Komunitas, Event, dan Retail saling menguatkan. Pilar utama menunjukkan fokus; pilar kolaborator menunjukkan kontribusi lintas ekosistem. Pilar tidak boleh dipakai sebagai silo kaku.

## 3. Satu Sumber Kebenaran per Domain

Setiap domain data dan keputusan penting harus memiliki source of truth yang jelas. Salinan, cache, dashboard, atau chat tidak boleh diam-diam berubah menjadi sumber baru. Migrasi source of truth selalu memerlukan keputusan resmi.

## 4. Dokumentasi Sebelum Perubahan Material

Perubahan yang sulit, mahal, atau berbahaya untuk dibalikkan harus memiliki konteks, acceptance criteria, verification plan, dan rollback plan sebelum implementasi. Keputusan arsitektur material dicatat sebagai ADR.

## 5. AI Membantu; Manusia Bertanggung Jawab

AI boleh meneliti, menyusun, mengimplementasikan, menguji, dan memantau dalam batas tugasnya. Human owner tetap bertanggung jawab atas keputusan kritis, penggunaan kewenangan, dan penerimaan hasil bisnis.

## 6. Auditabilitas Sejak Awal

Perubahan penting harus meninggalkan jejak yang dapat ditinjau: siapa melakukan apa, atas dasar keputusan mana, kapan, terhadap artifact apa, dan bagaimana hasilnya diverifikasi.

## 7. Build Modularly

Kapabilitas bersama boleh digunakan ulang, tetapi tidak semua produk harus dipaksa masuk ke satu aplikasi atau repository. Batas domain, kontrak, dan ownership harus tetap jelas.

## 8. Rilis Bernilai Terkecil

MVP adalah rilis terkecil yang aman dan dapat menguji nilai nyata. MVP bukan alasan untuk melewatkan keamanan, integritas data, atau acceptance criteria yang esensial.

## 9. Verifikasi Sebelum Menyatakan Selesai

File atau kode yang sudah dibuat belum berarti selesai. Pekerjaan selesai setelah acceptance criteria diperiksa dan evidence tersedia.

## 10. Trusted Changes Tetap Tercatat

Perubahan kecil, aman, reversible, dan selaras dapat dikerjakan tanpa meminta approval pada setiap detail. Kecepatan tidak menghapus kewajiban verification, commit history, patch log, atau laporan.

## 11. Keputusan Penting Tidak Boleh Hanya Hidup di Chat

Chat adalah ruang berpikir, bukan arsip keputusan akhir. Keputusan dianggap tuntas setelah dicatat di repository yang tepat sebagai dokumentasi, PRD, ADR, issue, patch log, SOP, data contract, atau acceptance record.

## 12. Perbaiki Sistem dari Pembelajaran

Kesalahan atau pengecualian berulang menjadi sinyal untuk memperbaiki business rules, dokumentasi, test, monitoring, automation, atau proses—bukan hanya menambal hasil satu kali.
