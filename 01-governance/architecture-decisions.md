# Architecture Decision Record

Architecture Decision Record (ADR) mencatat keputusan material yang perlu dipahami kembali setelah percakapan awal berakhir.

## Kapan ADR Diperlukan

Gunakan ADR untuk:

- perubahan source of truth;
- architecture lintas repository atau sistem;
- authentication, authorization, role, dan permission;
- data contract material;
- payment, settlement, atau ledger architecture;
- pilihan yang sulit atau mahal dibalikkan;
- keputusan lintas ekosistem yang memengaruhi cara kerja banyak proyek;
- keputusan yang memilih satu alternatif dan menolak alternatif penting lain.

ADR tidak diperlukan untuk typo, detail implementasi lokal yang mudah dibalikkan, atau eksperimen yang belum menjadi keputusan.

## Status ADR

- **Proposed:** sedang dinilai; belum memberi izin implementasi kritis.
- **Accepted:** disetujui dan berlaku.
- **Superseded:** digantikan ADR baru; histori dipertahankan.
- **Deprecated:** tidak lagi dianjurkan tetapi histori tetap relevan.
- **Rejected:** dipertimbangkan lalu ditolak.

ADR accepted disimpan di `adr/accepted/`. Proposal dapat disimpan di issue atau area draft pemilik domain sampai disetujui.

## Penomoran dan Nama File

Gunakan ID berurutan empat digit:

```text
ADR-0001-four-pillars-ecosystem.md
```

ID tidak digunakan ulang. ADR baru yang mengganti keputusan lama harus menyebut `Supersedes` dan memperbarui status ADR lama.

## Isi Wajib

- ID;
- judul;
- status;
- tanggal;
- konteks;
- keputusan;
- alasan;
- alternatif yang dipertimbangkan;
- konsekuensi positif;
- konsekuensi negatif;
- risiko;
- rollback atau revisiting condition;
- owner;
- link terkait.

Gunakan [template ADR](../templates/adr-template.md).

## Hubungan dengan Artifact Lain

- PRD menjelaskan masalah dan hasil produk.
- ADR menjelaskan keputusan architecture atau lintas-sistem.
- Implementation spec menjelaskan cara mengerjakan perubahan yang telah diputuskan.
- Patch log menjelaskan apa yang akhirnya berubah.

ADR tidak boleh dipakai untuk menyamarkan keputusan yang belum mendapat approval. Status harus selalu terlihat.

## ADR Foundation yang Diterima

- [ADR-0001 — Empat Pilar sebagai Kerangka Ekosistem](../adr/accepted/ADR-0001-four-pillars-ecosystem.md)
- [ADR-0002 — SWI Playbook sebagai Pedoman Lintas Ekosistem](../adr/accepted/ADR-0002-swi-playbook-cross-ecosystem.md)
- [ADR-0003 — SystemSWI sebagai Pusat Informasi dan Pengawasan](../adr/accepted/ADR-0003-systemswi-information-and-oversight.md)
- [ADR-0004 — Keputusan Penting Harus Memiliki Artifact Tahan Lama](../adr/accepted/ADR-0004-durable-decision-records.md)
