# Standar Keamanan

Security adalah bagian dari product dan operations, bukan pemeriksaan terakhir setelah fitur selesai.

## Prinsip

- least privilege: berikan akses minimum yang diperlukan;
- deny by default untuk tindakan sensitif;
- server-side enforcement untuk auth dan permission;
- secret tidak disimpan di source code, chat, log, atau patch log;
- input eksternal dianggap tidak tepercaya;
- tindakan kritis memiliki audit trail;
- data sensitif diminimalkan dan diperlakukan sesuai kebutuhan domain;
- dependency dan integration memiliki owner serta failure behavior.

## Review Berdasarkan Domain

Perubahan berikut otomatis high/critical atau memerlukan review ketat:

- authentication dan session;
- authorization, role, dan permission;
- payment, refund, settlement, dan ledger;
- upload/file processing;
- webhook dan integration eksternal;
- secret rotation;
- destructive migration atau penghapusan data;
- automation dengan write access.

## Checklist Implementasi

- autentikasi dan otorisasi diperiksa pada boundary yang benar;
- input divalidasi dan output disanitasi sesuai konteks;
- error tidak membocorkan stack, token, atau data sensitif;
- logging cukup untuk audit tanpa menyimpan secret;
- retry tidak menggandakan transaksi;
- webhook diverifikasi dan replay dipertimbangkan;
- rate limit/abuse control dipertimbangkan;
- dependency baru memiliki alasan dan risiko;
- test negatif dan permission tersedia;
- rollback dan incident response diketahui.

## Secret

Gunakan secret manager atau environment configuration. Dokumentasi hanya menyebut nama variable dan cara memperoleh/merotasinya melalui owner resmi, bukan nilainya.

Jika secret ditemukan di repository:

1. jangan menyebarkannya lagi;
2. beri tahu human owner;
3. perlakukan sebagai high/critical incident;
4. rotate/revoke melalui proses yang disetujui;
5. periksa penggunaan dan audit log;
6. bersihkan histori hanya dengan rencana khusus—menghapus file terakhir tidak otomatis menghapus secret dari histori.

## Security Fix dan Trusted Change

Security fix hanya termasuk trusted change bila sederhana, scope jelas, reversible, tidak menyentuh domain kritis, dan terverifikasi. Fix auth/permission/payment tetap high/critical meskipun diff kecil.

## Pelaporan

Jangan mempublikasikan detail eksploitasi atau data sensitif di kanal terbuka. Catat finding, severity, evidence minimum, owner, remediation, verification, dan disclosure boundary di lokasi yang tepat.
