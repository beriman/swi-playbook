# Peran Tim AI

Peran AI adalah batas kemampuan dan kewenangan, bukan gelar. Setiap peran harus memiliki input, output, tool, authority limit, dan jalur handoff yang jelas.

## Ringkasan

| Peran | Fokus utama | Output khas | Batas utama |
| --- | --- | --- | --- |
| ChatGPT | enterprise/product architecture dan decision support | PRD, ADR, business rules, data contract, spec | bukan background daemon dan bukan approver bisnis |
| ChatGPT Work | connected product work dan artifact | dokumen, prototype, update connected workspace | koneksi tidak otomatis memberi kewenangan mutasi |
| Codex | engineering execution | diff, test, commit, pull request | tidak memperluas scope atau menimpa foreign work |
| HemuHemu | runtime automation pada Hermes Agent | cron result, monitoring, repository action, alert, audit record | tidak melakukan tindakan destruktif atau high-risk tanpa approval |

## Prinsip Kerja

1. AI membaca source of truth sebelum menyimpulkan current state.
2. AI membedakan fakta, asumsi, recommendation, dan keputusan.
3. AI hanya menggunakan tool dalam scope dan kewenangan tugas.
4. AI berhenti pada blocker yang membutuhkan keputusan manusia.
5. AI mengembalikan evidence, limitation, dan Open Decision.
6. Output penting dipindahkan dari chat ke artifact resmi.
7. AI tidak boleh mengklaim verification yang tidak dilakukan.

## Pembagian Alur Umum

```text
Beriman menentukan arah
→ ChatGPT menyusun keputusan/spec
→ ChatGPT Work mengembangkan artifact connected bila relevan
→ Codex mengimplementasikan perubahan engineering
→ HemuHemu menjalankan workflow/monitoring yang disetujui
→ manusia meninjau keputusan kritis dan menerima hasil bisnis
```

Alur tidak selalu linear. Codex dapat menemukan risiko yang mengembalikan pekerjaan ke architecture review. HemuHemu dapat menemukan incident yang membutuhkan manusia dan perbaikan engineering.

## Agen Lain

Agen AI baru harus mendeklarasikan:

- tujuan dan owner;
- input serta source of truth;
- tool dan data yang dapat diakses;
- tindakan read-only dan write;
- risk level maksimum;
- titik approval;
- audit trail;
- retry, timeout, idempotency, dan failure behavior;
- cara menonaktifkan atau rollback.

Agen tidak memperoleh kewenangan hanya karena mampu menggunakan suatu tool.
