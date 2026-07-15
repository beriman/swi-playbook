# Concurrent Work dan Repository Safety

Dokumen ini mencegah manusia, Codex, HemuHemu, atau agen lain saling menimpa pekerjaan.

## Task Start Protocol

Sebelum mengubah repository:

1. jalankan `git status`;
2. identifikasi task owner;
3. catat repository dan branch;
4. tetapkan file scope;
5. identifikasi modified/untracked files dalam dan di luar scope;
6. periksa task atau lock aktif yang diketahui;
7. buat atau catat lock dengan expiry bila sistem locking digunakan.

Catatan minimum:

```text
Task owner:
Repository:
Branch:
Base commit:
File scope:
Risk level:
Lock expiry:
Known foreign changes:
```

## Aturan Keselamatan

1. Jangan menyentuh perubahan asing.
2. Jangan melakukan `reset`, `stash`, overwrite, checkout file, atau penghapusan terhadap pekerjaan lain tanpa instruksi eksplisit.
3. Gunakan branch untuk perubahan medium/high risk.
4. Satu task hanya boleh commit file yang menjadi bagian task tersebut.
5. Stage file secara eksplisit jika working tree bercampur.
6. Jangan push langsung ke `main` untuk medium/high risk.
7. Periksa kembali status dan diff sebelum commit.
8. Jika scope berbenturan, jangan “menang” dengan menimpa; hentikan task.

## Status Benturan

Gunakan:

```text
BLOCKED_BY_CONCURRENT_WORK
```

Laporan blocker harus memuat:

- file yang berbenturan;
- owner atau proses lain jika diketahui;
- branch dan current state;
- bagian pekerjaan yang masih aman;
- keputusan atau koordinasi yang dibutuhkan.

`BLOCKED_BY_FOREIGN_CHANGES` dapat digunakan bila foreign changes baru ditemukan saat pre-commit.

## Lock

Lock adalah guard operasional, bukan pengganti Git.

Lock harus:

- memiliki owner;
- menyebut repository, branch, dan file scope;
- memiliki waktu dibuat dan expiry;
- memiliki status aktif/dilepas/kedaluwarsa;
- tidak berlaku selamanya.

Durasi expiry dipilih sesuai ukuran task dan harus cukup pendek agar stale lock tidak menghambat pekerjaan. Nilai waktu baku lintas-repository adalah Open Decision; repository dapat menetapkan default sendiri.

Saat lock kedaluwarsa, agen tidak boleh memperpanjang secara diam-diam. Periksa kembali `git status`, scope, dan owner sebelum memperoleh lock baru. Stale lock tidak memberi izin untuk menghapus pekerjaan.

## Pre-Commit Protocol

1. jalankan `git status --short`;
2. periksa `git diff --name-only` dan staged diff;
3. pastikan seluruh file merupakan subset task scope;
4. pastikan lock masih valid bila digunakan;
5. jalankan verification;
6. stage explicit file list;
7. commit dengan pesan yang menjelaskan intent.

## Handoff Antar-Agen

Pemberi handoff harus menyebut branch, base/head commit, file selesai, file belum selesai, dirty state, verification, dan lock status. Penerima selalu memverifikasi ulang; ia tidak menganggap status lama masih berlaku.

## Larangan Force

Force-push, penghapusan branch, atau rewrite history memerlukan instruksi dan review khusus. Tindakan tersebut tidak termasuk trusted change hanya karena diff akhirnya kecil.
