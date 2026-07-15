# Klasifikasi Risiko dan Approval

Risk level ditentukan oleh dampak terburuk yang masuk akal, bukan hanya jumlah file. Perubahan satu baris pada permission dapat lebih berisiko daripada puluhan file dokumentasi.

## Cara Menilai

Pertimbangkan:

- dampak pada pelanggan, komunitas, keuangan, legal, dan reputasi;
- apakah perubahan mudah dibalikkan;
- apakah menyentuh data produksi atau source of truth;
- apakah membuka atau memperluas permission;
- kemungkinan duplikasi, kehilangan data, atau tindakan eksternal;
- luas sistem dan pilar yang terdampak;
- kualitas verification dan rollback yang tersedia.

Jika ragu antara dua level, gunakan level yang lebih tinggi sampai ada evidence yang menurunkan risiko.

## Low Risk

Contoh:

- dokumentasi, koreksi bahasa, dan typo;
- patch log dan laporan;
- template dan perbaikan link;
- perubahan struktur folder yang tidak memutus consumer;
- UI kecil tanpa perubahan business rule;
- test tambahan;
- refactor lokal yang aman dan terverifikasi;
- security fix sederhana yang scope-nya jelas, tidak menyentuh auth/permission/secret, dan telah diuji.

Workflow:

- boleh memakai [Trusted Changes](trusted-changes.md);
- scope dan owner tetap jelas;
- verification wajib;
- commit history dan patch record tetap dibuat;
- dapat di-merge tanpa approval pada setiap detail bila kebijakan repository mengizinkan.

## Medium Risk

Contoh:

- fitur multi-file;
- API atau integrasi baru;
- perubahan workflow;
- data contract non-destruktif;
- perubahan dashboard penting;
- cron baru;
- automation yang dapat menulis data;
- perubahan lintas beberapa modul dengan fallback tersedia.

Wajib:

1. issue atau spec;
2. risk classification;
3. branch terpisah;
4. acceptance criteria dan verification plan;
5. implementasi serta test;
6. pull request;
7. review;
8. patch log tersendiri;
9. live verification bila dirilis.

## High/Critical Risk

Contoh:

- authentication atau authorization;
- role dan permission;
- payment, refund, atau settlement;
- data finansial atau shareholder ledger;
- destructive migration;
- perubahan source of truth;
- secret rotation;
- penghapusan data;
- perubahan profit sharing;
- deployment dengan blast radius tinggi.

Wajib:

1. approval manusia sebelum tindakan kritis;
2. ADR atau decision record;
3. implementation plan;
4. verification plan;
5. rollback plan atau alasan tertulis bila rollback tidak mungkin;
6. branch dan pull request;
7. audit trail;
8. review sebelum merge dan deploy;
9. live verification serta post-release monitoring.

AI tidak boleh menyetujui sendiri high/critical change. Dry-run tidak menghapus kebutuhan approval jika langkah berikutnya akan memutasi produksi.

## Klasifikasi Ulang

Risk level harus dinaikkan apabila selama implementasi ditemukan scope lebih luas, source of truth tidak jelas, test gagal, data produksi terlibat, atau rollback tidak lagi layak. Penurunan level memerlukan evidence dan alasan yang dicatat.

## Keuangan

Batas nominal approval keuangan adalah **Open Decision**. Jangan memasukkan angka sementara sebagai kebijakan resmi. Sampai ada keputusan, payment, refund, settlement, shareholder ledger, dan perubahan profit sharing diperlakukan sebagai high/critical berdasarkan domainnya.
