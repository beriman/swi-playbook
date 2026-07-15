# Pemeliharaan SWI Playbook

Dokumen ini menetapkan ownership, cadence, dan trigger peninjauan SWI Playbook agar fondasi tidak menjadi artifact yang dibiarkan usang.

## Ownership

- **Product Owner:** Beriman.
- **Maintainer operasional:** ChatGPT Work atau HemuHemu sesuai task, koneksi, dan authority limits yang diberikan.
- **Engineering implementer:** Codex, HemuHemu, manusia, atau developer yang ditugaskan.
- **Approver high/critical change:** Beriman atau human owner yang didelegasikan secara eksplisit.

Maintainer operasional tidak memperoleh kewenangan strategis permanen. Setiap task tetap memiliki scope, risk level, dan approval tersendiri.

## Review Rutin

Review dilakukan paling sedikit **setiap 3 bulan**. Product Owner dapat menggunakan siklus kuartalan agar mudah diingat, tetapi tanggal kerja disesuaikan dengan kapasitas dan dicatat pada issue atau review record.

Review rutin memeriksa:

1. apakah ringkasan keselarasan masih sesuai dengan [SystemSWI](https://systemswi.vercel.app/) dan [halaman About](https://systemswi.vercel.app/about);
2. apakah empat pilar, peran, decision rights, dan source of truth masih benar;
3. apakah ada AI, tool, repository, integration, atau workflow baru;
4. apakah risk classification dan approval masih memadai;
5. apakah template, link, ADR, dan patch log masih dapat digunakan;
6. apakah GitHub Actions lulus dan minimum structure masih relevan;
7. apakah Open Decisions perlu diselesaikan, dipertahankan, atau ditutup;
8. apakah isi yang berulang dapat diringkas tanpa menghilangkan makna.

Visi dan misi tidak disalin ke Playbook. Review memastikan link serta ringkasan keselarasan tetap aktual terhadap source of truth di SystemSWI.

## Review Insidental

Review dilakukan sebelum jadwal rutin apabila terjadi:

- insiden besar atau kegagalan kontrol;
- perubahan struktur perusahaan atau empat pilar;
- penambahan AI, agent runtime, connector, atau tool dengan kewenangan baru;
- perubahan source of truth;
- perubahan besar pada GitHub workflow, risk model, atau approval;
- pola kesalahan berulang yang menunjukkan playbook tidak cukup jelas.

## Output Review

Setiap review menghasilkan:

- issue atau review record dengan tanggal dan owner;
- daftar sumber yang diperiksa;
- keputusan `no change`, `maintenance`, atau `material update`;
- Open Decisions dan owner;
- patch record bila ada perubahan;
- verification evidence dan next review window.

Review `no change` tidak memerlukan patch log tersendiri, tetapi issue/review record harus ditutup dengan evidence. Perubahan mengikuti kebijakan [patch log](../patch-log/README.md).

## Perubahan Kebijakan

- perubahan editorial kecil dapat mengikuti Trusted Changes;
- perubahan cadence, ownership, risk/approval, source of truth, atau kewenangan AI adalah perubahan material;
- keputusan material dicatat melalui ADR atau decision record;
- medium/high change memakai branch, PR, dan GitHub checks.

Keputusan ownership dan cadence dicatat pada [ADR-0005](../adr/accepted/ADR-0005-playbook-ownership-and-review-cadence.md).
