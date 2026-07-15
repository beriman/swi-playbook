# AI Handoff Workflow

Handoff adalah serah-terima pekerjaan kepada manusia atau AI lain. Handoff yang baik memungkinkan penerima melanjutkan tanpa menebak tujuan, kewenangan, atau kondisi repository.

## Alur

```text
Siapkan konteks
→ Tetapkan sumber dan batas
→ Nyatakan risiko dan kewenangan
→ Berikan acceptance criteria
→ Serahkan artifact
→ Penerima verifikasi current state
→ Eksekusi
→ Kembalikan hasil dan evidence
```

## Isi Minimum Handoff Besar

1. **Tujuan** — outcome yang harus dicapai.
2. **Konteks** — mengapa pekerjaan diperlukan dan kondisi saat ini.
3. **Source of truth** — sumber resmi yang harus dibaca.
4. **File/repository terkait** — lokasi artifact dan branch.
5. **Scope** — yang boleh diubah.
6. **Out of scope** — yang tidak boleh disentuh.
7. **Business rules** — aturan yang telah disetujui.
8. **Risk level** — low, medium, atau high/critical.
9. **Acceptance criteria** — kondisi testable untuk menerima hasil.
10. **Verification command** — cara memeriksa hasil.
11. **Rollback plan** — cara kembali ke keadaan aman, bila relevan.
12. **Expected output** — bentuk deliverable dan laporan.
13. **Authority limits** — tindakan yang tidak boleh dilakukan tanpa approval.
14. **Open Decisions** — hal yang belum diputuskan dan owner-nya.

Gunakan [template handoff](../templates/handoff-template.md).

## Aturan untuk Pemberi Handoff

- rujuk artifact, jangan hanya menceritakan ulang chat;
- bedakan fakta, keputusan, asumsi, dan recommendation;
- jangan memberikan credential melalui prompt atau repository;
- jangan menyebut opsi belum disetujui sebagai business rule;
- berikan file scope yang cukup sempit untuk menghindari konflik;
- sebutkan foreign changes atau pekerjaan paralel yang diketahui.

## Aturan untuk Penerima Handoff

Sebelum bekerja:

1. baca instruksi repository;
2. jalankan `git status` bila menyentuh repository;
3. verifikasi branch, source of truth, dan freshness konteks;
4. bandingkan scope dengan kondisi aktual;
5. klasifikasikan ulang jika risiko berbeda;
6. hentikan bagian berisiko bila ada konflik atau keputusan hilang.

Penerima boleh memperbaiki detail low risk yang masih berada dalam scope. Penerima tidak boleh memperluas tujuan atau kewenangan material secara diam-diam.

## Return Handoff

Hasil dikembalikan dengan:

- status: selesai, partial, atau blocked;
- ringkasan perubahan;
- file, commit, PR, deployment, atau artifact terkait;
- verification dan evidence;
- deviasi dari spec;
- limitation;
- Open Decision;
- risiko tersisa dan next step.

## Contoh Ringkas

Untuk perubahan katalog SWI Store, handoff tidak cukup berbunyi “aktifkan katalog live”. Handoff harus menyebut sumber katalog saat ini, repository, endpoint, fallback behavior, data contract, risk level, test, larangan mengubah payment, dan expected evidence bahwa halaman produksi membaca sumber live.
