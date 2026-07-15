# Definition of Done

Pekerjaan hanya boleh dinyatakan selesai setelah seluruh kondisi yang berlaku diperiksa. Item yang tidak relevan boleh ditandai `N/A` dengan alasan, bukan diabaikan diam-diam.

## Product

- masalah dan tujuan jelas;
- hubungan dengan SWI dan kontribusi pilar jelas;
- scope dan out of scope jelas;
- acceptance criteria terpenuhi;
- deviasi dari PRD/spec tercatat dan disetujui;
- Open Decision tidak disamarkan sebagai keputusan final.

## Engineering

- implementasi terfokus pada task scope;
- review diff dilakukan;
- test relevan lulus;
- error, retry, timeout, dan idempotency dipertimbangkan;
- permission dan data sensitif ditinjau;
- API, event, database, dan data contract changes didokumentasikan;
- dependency/config changes terlihat;
- tidak ada secret atau credential;
- concurrency safety dipenuhi dan foreign changes tidak ikut ter-commit.

## Operations

- deployment, configuration, migration, dan rollback terdokumentasi bila relevan;
- monitoring dan audit trail tersedia untuk workflow penting;
- SOP atau exception handling tersedia bila diperlukan;
- owner setelah rilis jelas;
- automation memiliki trigger, approval gate, retry, stop condition, dan disable procedure yang sesuai;
- live verification dilakukan bila ada deployment.

## Documentation

- README, PRD, ADR, SOP, data contract, atau dokumen terkait diperbarui;
- issue, PRD, ADR, PR, dan commit saling terhubung bila relevan;
- known limitations terlihat;
- patch log dibuat atau diperbarui;
- keputusan penting tidak hanya tersimpan di chat.

## Verification

- setiap acceptance criterion memiliki hasil;
- command/check dan environment/ref dicatat;
- evidence tersedia;
- failure atau bagian yang tidak dapat diperiksa terlihat;
- hasil bukan sekadar klaim “sudah selesai”.

## Approval dan Release

- risk level terakhir dikonfirmasi;
- reviewer dan human approval sesuai tingkat risiko tersedia;
- commit yang diterima sama dengan commit yang dirilis;
- branch utama dan deployment diverifikasi;
- rollback trigger diketahui.

## Completion Record

Laporan akhir minimal memuat:

- status: selesai, partial, atau blocked;
- repository, branch, commit, dan PR;
- perubahan dan impact;
- verification dan evidence;
- deployment/merge status;
- patch log;
- known limitations;
- Open Decision;
- next step.
