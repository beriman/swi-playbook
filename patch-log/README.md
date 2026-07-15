# Patch Log SWI Playbook

Patch log menjelaskan perubahan dalam bahasa yang mudah dipahami manusia dan agen lain. Ia tidak menggantikan Git history; commit dan PR tetap menjadi sumber detail diff.

## Struktur yang Dipilih

SWI Playbook menggunakan struktur berbasis tanggal:

```text
patch-log/
  README.md
  2026/
    YYYY-MM-DD-nama-perubahan.md
```

Alasannya:

- perubahan dokumentasi dapat terjadi beberapa kali tanpa selalu menjadi release software;
- tanggal memudahkan audit kronologis lintas agent;
- satu hari dapat memiliki beberapa perubahan dengan slug berbeda;
- versi tetap dapat dicatat di dalam file untuk milestone seperti v0.1.0.

Jika nanti suatu produk membutuhkan patch log versi, repository produk boleh memilih struktur versi. Pilihan lokal harus dijelaskan pada README patch log-nya.

## Format Wajib

Gunakan [template patch log](../templates/patch-log-template.md) dengan bagian:

- Ringkasan;
- Added;
- Changed;
- Fixed;
- Security;
- Verification;
- Impact;
- Known Limitations;
- Lessons Learned;
- Next;
- Repository;
- issue/PR/commit;
- agent atau human owner;
- repository safety/concurrency record.

Bagian yang tidak memiliki perubahan tetap ditulis, misalnya “Tidak ada perubahan security”, agar pembaca tahu area tersebut dipertimbangkan.

## Aturan

- buat patch log untuk perubahan material dan release;
- tulis dampak, bukan hanya nama file;
- tautkan issue, PR, commit, dan ADR;
- jangan memasukkan secret atau data sensitif;
- perbarui hasil verification dan merge/deploy aktual;
- jangan menyatakan limitation selesai jika belum diverifikasi.
