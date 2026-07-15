# Branch, Commit, dan Pull Request

## Branch Strategy

- `main` merepresentasikan kondisi yang diterima sesuai kebijakan repository.
- low-risk trusted change dapat memakai branch pendek atau jalur langsung yang memang diizinkan repository.
- medium/high risk wajib memakai branch dan PR.
- branch agen dapat memakai prefix `agent/` bila sesuai kebijakan lokal.

Nama branch menyampaikan intent:

```text
agent/playbook-v0.1-foundation
feat/store-catalog-live-source
fix/order-idempotency
docs/payment-adr
```

## Sebelum Branch atau Commit

1. `git status`;
2. sinkronkan pemahaman terhadap base branch tanpa menimpa local work;
3. catat base commit;
4. periksa foreign changes;
5. tentukan file scope;
6. periksa concurrency lock bila berlaku.

## Commit

Commit harus kecil secara logis, bukan sekadar kecil jumlah baris. Satu commit menjelaskan satu intent yang dapat direview.

Format yang dianjurkan:

```text
<type>: <intent ringkas>
```

Type umum: `docs`, `feat`, `fix`, `refactor`, `test`, `chore`, `security`.

Aturan:

- stage path secara eksplisit pada working tree campuran;
- commit hanya file task;
- jangan memakai pesan generik seperti “update”;
- jangan memasukkan generated data sensitif;
- verification failure yang diterima harus terlihat di PR, bukan disembunyikan.

## Pull Request

Judul PR merangkum outcome. Body minimal memuat:

```text
Summary
Why
Risk level
Scope / out of scope
Changes
Verification
Impact
Known limitations
Rollback
Related issue/PRD/ADR/patch record
```

Tambahkan screenshot atau rekaman flow untuk perubahan UI bila membantu review.

## Review Checklist

- diff sesuai scope;
- tidak ada foreign changes;
- acceptance criteria tercakup;
- test relevan dan evidence ada;
- error/retry/idempotency ditinjau;
- permission, data sensitif, dan secret ditinjau;
- migration/deployment/rollback jelas;
- docs dan patch record diperbarui;
- Open Decision tidak disamarkan sebagai implementasi final.

## Merge

Gunakan metode merge sesuai kebijakan repository. Sebelum merge, pastikan branch tidak conflict, approval terpenuhi, checks relevan pass, dan head commit yang direview masih sama. Setelah merge, verifikasi main serta runtime bila ada.

Force-push atau rewrite history bukan operasi rutin dan memerlukan koordinasi eksplisit.
