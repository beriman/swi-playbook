# Standar Prompt dan Konteks

Prompt operasional yang baik berfungsi seperti task brief. Ia harus cukup lengkap untuk mencegah tebakan material, tetapi tetap menunjuk source of truth agar konteks tidak menjadi salinan usang.

## Struktur Minimum

```text
Role
Objective
Context
Source of truth
Repository / branch / file scope
Scope
Out of scope
Business rules
Risk level
Acceptance criteria
Verification
Rollback
Expected output
Authority limits
Open Decisions
```

Gunakan [template handoff](../templates/handoff-template.md) atau [implementation spec](../templates/implementation-spec-template.md).

## Kualitas Konteks

- berikan link/path, bukan menempelkan seluruh repository;
- sebutkan tanggal atau commit untuk current state yang mudah berubah;
- pisahkan fakta, asumsi, keputusan, dan recommendation;
- jelaskan singkatan pada pemakaian pertama;
- gunakan ID requirement/business rule bila banyak aturan;
- berikan contoh dari domain SWI bila membantu;
- sebutkan konflik atau data yang belum diverifikasi.

## Freshness

Informasi tentang branch, deployment, data operasional, audit, dan API dapat berubah. Penerima harus memeriksa ulang sumber sebelum mengeksekusi. Snapshot lama tidak boleh disebut current state tanpa verifikasi.

## Security

Jangan memasukkan:

- secret, token, password, private key, atau credential;
- data pribadi yang tidak dibutuhkan;
- raw data finansial sensitif bila reference aman cukup;
- instruksi untuk melewati permission atau approval.

Gunakan nama environment variable atau secret reference, bukan nilainya.

## Authority Language

Gunakan kalimat eksplisit:

- “Boleh mengubah file berikut...”
- “Tidak boleh deploy...”
- “Approval diperlukan sebelum...”
- “Jika scope berbenturan, laporkan `BLOCKED_BY_CONCURRENT_WORK`.”

Hindari “rapikan semuanya” atau “lakukan apa pun yang diperlukan” untuk tugas yang memiliki risiko material.

## Expected Output

Mintalah laporan yang dapat diverifikasi: status, file, diff summary, test command, output, commit, PR, limitation, Open Decision, dan next step. Jika artifact harus disimpan, sebutkan repository serta path pemilik domain.

## Context Handoff

Ringkasan chat boleh membantu continuity, tetapi tidak mengungguli repository. Keputusan baru harus dicatat di artifact resmi sebelum dianggap berlaku.
