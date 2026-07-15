# Release dan Pembelajaran

Release adalah awal penggunaan nyata, bukan akhir tanggung jawab product team.

## Sebelum Release

- acceptance criteria dan Definition of Done diperiksa;
- risk approval terpenuhi;
- user/operator impact dipahami;
- release dan rollback plan tersedia;
- owner monitoring/support ditetapkan;
- analytics atau evidence plan siap;
- patch log disiapkan.

## Release Note dan Patch Log

Patch log menjelaskan perubahan dalam bahasa operasional:

- apa yang ditambahkan, diubah, diperbaiki, atau diamankan;
- bagaimana diverifikasi;
- siapa terdampak;
- limitation;
- pelajaran dan next step.

Git history tetap menyimpan detail teknis; patch log membantu manusia dan agen lain memahami makna perubahan.

## Observation Window

Tentukan periode atau kondisi review sesuai produk, bukan angka universal. Selama observation window, periksa:

- error dan performance;
- workflow completion;
- support/exception;
- data quality;
- adoption atau outcome metric;
- feedback operator/pengguna;
- dampak lintas pilar.

## Learning Review

Bandingkan:

| Pertanyaan | Catatan |
| --- | --- |
| Outcome yang diharapkan | berasal dari PRD |
| Hasil aktual | evidence dan periode |
| Perbedaan | positif/negatif |
| Penyebab | fakta vs hipotesis |
| Pelajaran | apa yang perlu dipertahankan/diubah |
| Tindakan | owner, artifact, prioritas |

## Keputusan Setelah Rilis

- continue;
- iterate;
- expand;
- pause;
- rollback;
- retire.

Keputusan material dicatat di PRD/issue/ADR/roadmap. Jika hasil tidak sesuai harapan, jangan hanya mengubah metric agar terlihat berhasil.

## Penutupan

Sebuah increment dapat ditutup ketika follow-up kritis memiliki owner, limitation terlihat, patch log lengkap, dan pembelajaran telah masuk ke artifact berikutnya. Backlog baru tidak perlu diselesaikan dalam release yang sama, tetapi tidak boleh hilang.
