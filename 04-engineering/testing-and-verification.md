# Testing dan Verification

Testing membantu menemukan defect. Verification membuktikan bahwa acceptance criteria dan kondisi operasional yang disepakati telah diperiksa. Keduanya saling melengkapi.

## Verification Plan

Sebelum implementasi material, tentukan:

- requirement atau acceptance criteria yang diperiksa;
- test level;
- data/environment;
- expected result;
- negative dan failure case;
- evidence yang disimpan;
- siapa yang melakukan acceptance bila diperlukan.

## Lapisan Pemeriksaan

Gunakan yang relevan:

- review dokumen dan link;
- formatting/lint;
- typecheck;
- unit test;
- integration/API test;
- build;
- security check;
- migration dry-run;
- browser/end-to-end flow;
- permission/role matrix test;
- deployment smoke test;
- monitoring setelah rilis.

Tidak semua task memerlukan semua lapisan. Pilihan harus proporsional dengan risiko.

## Kasus yang Harus Dipertimbangkan

- input valid dan invalid;
- duplicate submission dan retry;
- timeout atau external dependency gagal;
- permission ditolak;
- empty/degraded/fallback state;
- partial failure;
- rollback atau backward compatibility;
- data lama yang belum bermigrasi;
- timezone, rounding, dan currency bila relevan.

## Evidence

Evidence dapat berupa:

- command dan exit result;
- ringkasan test count;
- screenshot atau rekaman browser;
- log dengan data sensitif disamarkan;
- query read-only;
- output dry-run;
- link deployment/PR/check;
- acceptance record manusia.

Jangan menempelkan secret atau data pelanggan ke issue/PR.

## Menangani Kegagalan

Jika verification gagal:

1. jangan menyatakan pekerjaan selesai;
2. catat failure dan apakah pre-existing atau akibat perubahan;
3. perbaiki dalam scope atau laporkan blocker;
4. klasifikasikan ulang risiko bila failure mengungkap dampak lebih besar;
5. ulangi check yang relevan setelah perbaikan.

Pre-existing debt tidak otomatis memblokir semua perubahan, tetapi harus terlihat dan tidak boleh diperburuk.

## Dokumentasi Selesai

Laporan verification menyebut command/check, hasil, environment/ref, evidence, bagian yang tidak diperiksa, serta limitation. Klaim “semua aman” tanpa cakupan tidak dapat diterima.
