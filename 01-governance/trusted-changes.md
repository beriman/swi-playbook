# Trusted Changes

Trusted change adalah perubahan kecil yang aman, reversible, selaras dengan arah SWI, dan dapat diverifikasi dengan jelas. Kebijakan ini mengurangi approval mikro tanpa mengurangi tanggung jawab.

## Syarat

Semua kondisi berikut harus terpenuhi:

- risk level rendah;
- tujuan dan file scope jelas;
- tidak mengubah strategi, business rule material, source of truth, atau kontrak eksternal;
- tidak menyentuh auth, permission, payment, refund, settlement, secret, atau data sensitif;
- tidak melakukan penghapusan/destructive migration;
- mudah dibalikkan;
- repository tidak memiliki konflik atau foreign changes pada scope;
- verification yang proporsional tersedia;
- perubahan serta hasilnya dapat diaudit.

Jika satu syarat tidak terpenuhi, gunakan workflow medium/high risk.

## Contoh yang Umumnya Layak

- koreksi bahasa dan typo;
- dokumentasi dan template;
- perbaikan link;
- patch log;
- struktur folder dokumentasi;
- test tambahan;
- perbaikan UI kecil;
- refactor aman dengan behavior tetap;
- patch keamanan sederhana yang tidak menyentuh domain kritis dan telah terverifikasi.

## Workflow

```text
Identifikasi perubahan kecil
→ Cek keselarasan dan risiko
→ Tentukan scope
→ Implementasi
→ Verification
→ Commit/Merge
→ Patch Log
→ Laporan
```

Branch pendek tetap disarankan ketika ada kerja paralel atau repository policy memerlukannya. Direct commit ke `main` hanya boleh dilakukan bila repository secara eksplisit mengizinkan, working tree bersih, tidak ada concurrency, dan perubahan benar-benar low risk.

## Evidence Minimum

- daftar file berubah;
- verification command atau pemeriksaan manual;
- hasil pass/fail;
- diff yang telah ditinjau;
- patch log atau laporan perubahan.

## Stop Conditions

Hentikan jalur trusted change dan klasifikasikan ulang jika:

- scope melebar;
- ditemukan keputusan strategis yang belum selesai;
- ada file asing dalam scope;
- verification gagal;
- perubahan ternyata memengaruhi data, permission, atau workflow kritis;
- rollback tidak sederhana.

Trusted berarti telah memperoleh kepercayaan melalui batas dan evidence, bukan bebas kontrol.
