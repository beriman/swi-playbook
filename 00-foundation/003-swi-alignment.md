# 003 — Keselarasan dengan SWI

## Cita-Cita Besar

> “Menjadi arsitek utama kemandirian wewangian Indonesia, merancang masa depan dimana kekayaan Nusantara menjadi tuan rumah yang berdaulat dan disegani dunia.”

SystemSWI menjelaskan peran SWI sebagai arsitek yang membangun fondasi ekosistem wewangian mandiri, menghubungkan unsur hulu hingga hilir, menguasai inovasi dan riset, mengangkat warisan Nusantara, serta menjaga integritas.

Sebelum memulai pekerjaan material, jawab tiga pertanyaan:

1. Masalah nyata apa yang diselesaikan?
2. Bagaimana hasilnya mendukung kemandirian, kapasitas, atau keberlanjutan ekosistem wewangian Indonesia?
3. Pilar mana yang menjadi fokus utama dan pilar mana yang ikut memperoleh nilai?

Jika hubungannya belum jelas, pekerjaan masih berada pada tahap discovery dan belum siap menjadi komitmen implementasi.

## Empat Pilar

| Pilar | Fokus umum | Contoh kontribusi |
| --- | --- | --- |
| Media | edukasi, narasi, dokumentasi, dan jangkauan | YouTube, materi edukasi, dokumentasi event, kampanye produk |
| Komunitas | hubungan, partisipasi, pengetahuan bersama, dan layanan anggota | sensasiwangi.id, forum, kelas, tools perfumer, interaksi komunitas |
| Event | pengalaman, pertemuan, aktivasi, dan kolaborasi | Fragrantions, workshop, roadshow, showcase |
| Retail | produk, transaksi, distribusi, dan pengalaman toko | SWI Store, SWI Store OS, brand parfum, merchandise, marketplace |

Tabel ini adalah kerangka kontribusi, bukan pembatas organisasi.

## Pilar Utama dan Pilar Kolaborator

- **Pilar utama** adalah fokus atau kontribusi terbesar yang menjadi dasar tujuan, owner, dan pelaporan utama.
- **Pilar kolaborator** adalah pilar lain yang memberikan atau menerima nilai nyata dari aktivitas tersebut.

Contoh:

| Aktivitas | Pilar utama | Pilar kolaborator | Hubungan nilai |
| --- | --- | --- | --- |
| YouTube SWI | Media | Komunitas, Event, Retail | edukasi komunitas, dokumentasi event, dukungan awareness retail |
| sensasiwangi.id | Komunitas | Media, Event, Retail | ruang komunitas yang dapat menghubungkan konten, event, dan marketplace |
| Fragrantions | Event | Media, Komunitas, Retail | pengalaman langsung, konten, pertumbuhan komunitas, dan peluang transaksi |
| SWI Store dan SWI Store OS | Retail | Event, Komunitas, Media | transaksi dan layanan toko yang juga menjadi ruang aktivasi, interaksi, dan konten |
| Marketplace | ditentukan oleh tujuan PRD | Komunitas dan/atau Retail | layanan transaksi dapat sekaligus menguatkan hubungan komunitas |

Posisi contoh dapat diperdalam oleh PRD, tetapi perubahan klasifikasi yang berdampak pada ownership, alokasi biaya, atau pelaporan harus menjadi keputusan yang tercatat.

## Posisi SystemSWI

SystemSWI adalah pusat informasi, pengawasan, dan kendali operasional ekosistem SWI. Dashboard atau Command Center adalah fungsi di dalam SystemSWI, bukan produk terpisah.

SystemSWI tidak otomatis menjadi database utama untuk setiap domain. Ia dapat menampilkan atau mengawasi data dari sistem pemilik domain selama sumber, freshness, dan batas mutasinya terlihat.

## Peta Source of Truth Saat Ini

| Domain | Source of truth saat ini | Catatan |
| --- | --- | --- |
| visi, misi, cita-cita, dan arah perusahaan | SystemSWI | perubahan memerlukan keputusan perusahaan |
| cara kerja lintas ekosistem | SWI Playbook | repository ini |
| source code dan dokumentasi produk | repository produk masing-masing | issue, PRD, ADR, dan patch log diletakkan dekat pemilik domain |
| marketplace dan data komunitas | sensasiwangi.id dan Supabase sesuai domain | ikuti data contract produk yang berlaku |
| data operasional perusahaan tertentu | Google Sheets dan SystemSWI sesuai kondisi yang berlaku | jangan berasumsi semua data sudah dimigrasikan |
| percakapan | bukan source of truth final | keputusan harus dipindahkan ke artifact resmi |

Peta ini mencatat keadaan kerja, bukan mandat migrasi. Perubahan source of truth termasuk high/critical risk dan memerlukan approval serta ADR.

## Rujukan Resmi

- [SystemSWI](https://systemswi.vercel.app/)
- [Tentang SWI: filosofi, cita-cita, visi, dan misi](https://systemswi.vercel.app/about)
- [Repository SystemSWI](https://github.com/beriman/systemswi)
