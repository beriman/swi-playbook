# Patch Log SWI Playbook

Patch log menjelaskan perubahan dalam bahasa yang mudah dipahami manusia dan agen lain. Ia tidak menggantikan Git history; commit dan PR tetap menjadi sumber detail diff.

## Struktur yang Dipilih

SWI Playbook menggunakan struktur berbasis tanggal:

```text
patch-log/
  README.md
  2026/
    YYYY-MM-DD-nama-perubahan.md
    YYYY-MM-maintenance.md
```

Alasannya:

- perubahan dokumentasi dapat terjadi beberapa kali tanpa selalu menjadi release software;
- tanggal memudahkan audit kronologis lintas agent;
- satu hari dapat memiliki beberapa perubahan dengan slug berbeda;
- maintenance kecil dapat dikumpulkan dalam satu log bulanan;
- versi tetap dapat dicatat di dalam file untuk milestone seperti v0.1.0.

Jika nanti suatu produk membutuhkan patch log versi, repository produk boleh memilih struktur versi. Pilihan lokal harus dijelaskan pada README patch log-nya.

## Memilih Jenis Patch Record

| Jenis perubahan | Record | Contoh |
| --- | --- | --- |
| Bermakna atau material | file tersendiri `YYYY-MM-DD-slug.md` | policy baru, workflow/CI, template, ADR, risk rule, release |
| Maintenance kecil | entri pada `YYYY-MM-maintenance.md` | typo satu kata, format, link kecil, perbaikan kalimat tanpa mengubah makna |

Maintenance log dibuat saat entri pertama pada bulan tersebut diperlukan, bukan di awal bulan tanpa isi.

Satu entri maintenance minimal memuat:

- tanggal dan ringkasan;
- owner/implementer;
- file yang berubah;
- verification;
- issue/PR/commit bila tersedia;
- impact atau konfirmasi bahwa behavior/kebijakan tidak berubah.

Jika perubahan memerlukan ADR, mengubah business rule, risk/approval, source of truth, AI authority, minimum structure, atau automation, perubahan tersebut bukan maintenance kecil meskipun diff hanya beberapa baris.

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

## Aturan Umum

- buat patch log tersendiri untuk perubahan bermakna dan release;
- masukkan maintenance kecil ke log bulanan sebelum merge;
- tulis dampak, bukan hanya nama file;
- tautkan issue, PR, commit, dan ADR;
- jangan memasukkan secret atau data sensitif;
- perbarui hasil verification dan merge/deploy aktual;
- jangan menyatakan limitation selesai jika belum diverifikasi.
