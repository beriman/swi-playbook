# Standar Repository

Setiap repository SWI harus dapat dipahami oleh kontributor baru tanpa bergantung pada chat lama.

## Informasi Minimum

README repository sebaiknya menjelaskan:

- tujuan dan owner;
- posisi terhadap pilar SWI;
- status produk;
- stack dan cara menjalankan;
- source of truth serta integration utama;
- environment variable yang diperlukan tanpa nilainya;
- test dan verification command;
- deployment target;
- lokasi PRD, ADR, SOP, dan patch log;
- known limitations penting.

## Struktur Dokumentasi

Tidak semua repository harus sama, tetapi artifact harus mudah ditemukan. Contoh:

```text
docs/
  prd/
  adr/
  plans/
  operations/
patch-log/
```

Repository dapat memakai struktur lain bila README menunjukkan navigasinya.

## Source of Truth dan Ownership

Dokumentasikan:

- data apa yang dimiliki repository/sistem;
- data apa yang hanya dibaca dari sistem lain;
- API/event/data contract;
- owner schema atau business rule;
- cache/fallback dan cara membedakannya dari live source;
- aturan migrasi.

Dashboard tidak boleh menyamarkan sumber atau freshness data. Fallback harus terlihat.

## Instruksi Agen

Jika repository memiliki aturan khusus, simpan dalam file instruksi lokal yang dapat ditemukan agen. Aturan lokal boleh memperketat playbook, tetapi konflik strategis harus diangkat ke owner.

## File yang Tidak Boleh Disimpan

- secret dan credential;
- export data pelanggan/transaksi yang tidak semestinya;
- production token;
- private key;
- file sementara berisi data sensitif;
- build artifact besar tanpa alasan dan kebijakan.

Gunakan `.gitignore`, secret manager, dan sample environment file tanpa nilai rahasia.

## Hygiene

- jaga main branch dalam keadaan dapat dibangun sesuai kebijakan repository;
- jangan tinggalkan versi dokumen yang saling bertentangan tanpa status;
- link artifact terkait;
- tandai draft, accepted, deprecated, dan superseded;
- jangan menghapus histori keputusan hanya karena keputusan berubah;
- gunakan patch log untuk menjelaskan impact dalam bahasa operasional.

## Multi-Repository

Kapabilitas bersama boleh berada di repository tersendiri. Handoff lintas repository harus menyebut dependency, version/commit, owner, data contract, urutan rilis, dan rollback. Jangan memindahkan semua proyek ke monorepo tanpa ADR dan approval.
