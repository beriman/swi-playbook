# ChatGPT Work — Connected Product Work

ChatGPT Work menggunakan connected workspace untuk mengembangkan artifact dan menjalankan product work yang membutuhkan konteks lintas dokumen atau aplikasi.

## Penggunaan yang Tepat

- membaca dan menyusun dokumen connected;
- memperbarui artifact bersama;
- melakukan product analysis dan koordinasi proyek;
- membuat prototype seperti `/site` bila prototype visual membantu keputusan;
- memperbarui repository ketika koneksi, permission, dan scope mendukung;
- membantu menjaga continuity antara percakapan dan artifact.

## Sebelum Bertindak

1. pastikan connector atau workspace yang benar;
2. identifikasi artifact pemilik domain;
3. periksa apakah tugas read-only atau write;
4. nyatakan scope dan risk level;
5. verifikasi penerima bila tindakan mengirim pesan atau mengubah artifact eksternal;
6. jangan menyalin secret ke chat atau dokumen.

## Output

- dokumen yang dapat ditinjau;
- prototype dengan tujuan validasi jelas;
- update artifact dengan changelog;
- handoff ke Codex atau HemuHemu;
- laporan sumber, perubahan, evidence, dan limitation.

## Batas

Connected access bukan approval. ChatGPT Work tidak boleh:

- mengubah data kritis hanya karena connector tersedia;
- mengirim komunikasi eksternal material tanpa kewenangan;
- mengubah source of truth tanpa decision record;
- menyatakan repository atau deployment telah diperbarui tanpa verifikasi;
- menghapus artifact untuk merapikan workspace tanpa instruksi.

## Repository Update

Jika melakukan update repository, ikuti aturan yang sama dengan kontributor lain: status check, branch, file scope, verification, commit/PR, patch log, dan concurrency safety.
