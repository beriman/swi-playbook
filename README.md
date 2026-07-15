# SWI Playbook

Panduan resmi cara kerja bersama manusia dan AI di seluruh ekosistem PT Sensasi Wangi Indonesia.

- **Versi:** v0.1.1 — Foundation
- **Status:** aktif sebagai fondasi; disempurnakan melalui perubahan yang tercatat
- **Pemilik:** Beriman / Product Owner SWI
- **Review rutin:** paling sedikit setiap 3 bulan

## Arah yang Dijaga

> “Menjadi arsitek utama kemandirian wewangian Indonesia, merancang masa depan dimana kekayaan Nusantara menjadi tuan rumah yang berdaulat dan disegani dunia.”

SWI bekerja sebagai satu ekosistem dengan empat pilar utama:

1. Media;
2. Komunitas;
3. Event;
4. Retail.

Pilar utama menunjukkan fokus terbesar suatu produk atau aktivitas. Pilar kolaborator menunjukkan kontribusinya kepada bagian ekosistem yang lain. Pilar bukan silo organisasi yang kaku.

## Fungsi Playbook

SWI Playbook menjelaskan bagaimana SWI:

- menangkap ide, meneliti masalah, dan membuat keputusan;
- mendokumentasikan PRD, ADR, business rules, dan data contract;
- melakukan handoff antara manusia, ChatGPT, ChatGPT Work, Codex, dan HemuHemu;
- mengembangkan software serta automation secara aman;
- mengklasifikasikan risiko dan meminta approval yang tepat;
- melakukan review, verification, release, rollback, dan pembelajaran;
- menjaga audit trail dan keselarasan lintas proyek.

Playbook ini tidak menggantikan visi dan misi perusahaan, dokumentasi produk, SOP khusus unit, source code, data transaksi, credential, atau konfigurasi produksi. Informasi tersebut tetap berada di sistem pemilik domainnya.

## Pengguna

- pimpinan SWI dan Product Owner;
- tim manusia, operator, dan reviewer;
- ChatGPT dan ChatGPT Work;
- Codex;
- HemuHemu yang berjalan pada Hermes Agent;
- developer, mitra, dan kolaborator masa depan.

## Mulai dari Sini

Agen AI memulai dari [`AGENTS.md`](AGENTS.md). File tersebut merangkum urutan baca, source of truth, batas kewenangan, patch record, dan verification wajib.

Jika baru bergabung, baca berurutan:

1. [Tujuan](00-foundation/000-purpose.md), [ruang lingkup](00-foundation/001-scope.md), dan [keselarasan SWI](00-foundation/003-swi-alignment.md).
2. [Peran dan tanggung jawab](01-governance/roles-and-responsibilities.md), [hak keputusan](01-governance/decision-rights.md), serta [risiko dan approval](01-governance/risk-and-approval.md).
3. [Idea-to-Release](02-workflows/idea-to-release.md), [GitHub workflow](02-workflows/github-workflow.md), dan [AI handoff](02-workflows/ai-handoff.md).
4. [Definition of Done](04-engineering/definition-of-done.md) sebelum menyatakan pekerjaan selesai.

Untuk memulai pekerjaan baru, gunakan [template ide](templates/idea-template.md), [template issue](templates/issue-template.md), atau [template PRD](templates/prd-template.md) sesuai ukuran masalahnya.

## Peta Dokumentasi

| Area | Isi |
| --- | --- |
| [`00-foundation/`](00-foundation/000-purpose.md) | tujuan, ruang lingkup, prinsip, keselarasan SWI, dan glosarium |
| [`01-governance/`](01-governance/roles-and-responsibilities.md) | peran, hak keputusan, risiko, trusted changes, ADR, dan pemeliharaan playbook |
| [`02-workflows/`](02-workflows/idea-to-release.md) | idea-to-release, GitHub, AI handoff, emergency, dan concurrent work |
| [`03-ai-team/`](03-ai-team/ai-roles.md) | batas peran ChatGPT, ChatGPT Work, Codex, dan HemuHemu |
| [`04-engineering/`](04-engineering/repository-standards.md) | repository, branch, test, security, deployment, rollback, dan Definition of Done |
| [`05-product/`](05-product/product-discovery.md) | discovery, PRD, kontribusi pilar, prioritas, rilis, dan pembelajaran |
| [`templates/`](templates/idea-template.md) | template kerja yang dapat digunakan ulang |
| [`adr/accepted/`](adr/accepted/ADR-0001-four-pillars-ecosystem.md) | keputusan lintas-ekosistem yang telah diterima |
| [`patch-log/`](patch-log/README.md) | penjelasan perubahan dalam bahasa operasional |

## Source of Truth

Satu domain memiliki satu sumber kebenaran yang jelas:

- visi, misi, cita-cita, dan arah perusahaan: **SystemSWI**;
- cara kerja lintas-ekosistem: **SWI Playbook**;
- source code dan dokumentasi produk: repository masing-masing;
- data operasional: sistem pemilik domain yang berlaku saat ini.

GitHub menjadi sumber kebenaran untuk kode, dokumentasi, histori keputusan, issue, pull request, dan audit perubahan. Chat boleh digunakan untuk berpikir dan berkoordinasi, tetapi keputusan penting harus dipindahkan ke artifact yang tahan lama.

Rujukan perusahaan: [SystemSWI](https://systemswi.vercel.app/), [Tentang SWI](https://systemswi.vercel.app/about), dan [repository SystemSWI](https://github.com/beriman/systemswi).

Visi dan misi lengkap tidak diduplikasi di Playbook. Review berkala memastikan link dan ringkasan keselarasan tetap aktual terhadap SystemSWI.

## Enforcement Otomatis

Setiap pull request dan push ke `main` menjalankan [GitHub Actions verification](.github/workflows/verify-playbook.yml) untuk Markdown lint, internal links, penamaan resmi, credential patterns, file kosong, dan minimum structure. Kontributor tetap menjalankan perintah lokal pada [`AGENTS.md`](AGENTS.md) sebelum meminta review.

## Berkontribusi

Ikuti [CONTRIBUTING.md](CONTRIBUTING.md). Perubahan material harus memiliki scope, risk level, acceptance criteria, verification evidence, dan—bila relevan—rollback plan. Perubahan kecil yang memenuhi kebijakan [Trusted Changes](01-governance/trusted-changes.md) dapat bergerak lebih cepat, tetapi tetap harus dapat diaudit melalui maintenance log bulanan. Ownership dan review mengikuti [Pemeliharaan SWI Playbook](01-governance/playbook-maintenance.md).
