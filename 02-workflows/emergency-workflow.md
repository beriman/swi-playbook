# Emergency Workflow

Emergency work digunakan saat penundaan normal menimbulkan dampak lebih besar, misalnya outage, kebocoran data, payment error, atau automation yang terus menghasilkan mutasi salah.

Keadaan mendesak boleh memperpendek tahap, tetapi tidak menghapus kontrol inti.

## Alur Minimum

```text
Deteksi
→ Containment
→ Catat owner dan risiko
→ Approval relevan
→ Perbaikan terkecil yang aman
→ Verification
→ Release/Rollback
→ Monitoring
→ Post-Incident Review
```

## 1. Deteksi dan Containment

- catat waktu, gejala, sistem, dampak, dan reporter;
- hentikan perluasan dampak dengan tindakan reversible bila tersedia;
- pertahankan log dan evidence;
- jangan menghapus data atau jejak audit untuk “membersihkan” insiden.

Containment yang bersifat destruktif atau memutus layanan penting tetap memerlukan human approval sesuai tingkat risiko, kecuali runbook resmi telah memberi kewenangan eksplisit.

## 2. Owner dan Komunikasi

Tetapkan incident owner serta channel koordinasi. Bedakan fakta, dugaan, dan tindakan yang sudah dilakukan. Satu catatan utama digunakan untuk timeline.

## 3. Perubahan Darurat

Pilih perubahan terkecil yang menurunkan risiko. Catat:

- alasan jalur darurat;
- risk level;
- file/sistem terdampak;
- approval;
- rollback awareness;
- verification yang tetap dilakukan;
- kontrol normal yang ditunda.

## 4. Verification dan Release

Minimal pastikan masalah utama berhenti, jalur penting tetap berfungsi, dan tidak ada dampak baru yang jelas. Jika fix tidak dapat diverifikasi dengan cukup, rollback atau containment lebih aman harus dipertimbangkan.

## 5. Setelah Kondisi Stabil

Lengkapi dalam waktu yang disepakati owner:

- issue atau incident record;
- timeline;
- root cause dan contributing factors;
- approval serta tindakan darurat;
- test dan live verification;
- patch log;
- follow-up untuk test, monitoring, SOP, atau architecture;
- Post-Incident Review.

## Kontrol yang Tidak Boleh Hilang

- pencatatan;
- verification;
- approval yang relevan;
- post-incident review;
- rollback awareness;
- audit trail.

Urgency bukan izin bagi AI untuk memperluas kewenangan atau melakukan tindakan destruktif sendiri.
