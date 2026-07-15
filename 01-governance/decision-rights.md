# Hak Keputusan

Hak keputusan menjawab tiga hal: siapa mengusulkan, siapa memberi masukan, dan siapa yang berwenang menerima risiko akhir.

## Matriks Dasar

| Jenis keputusan | Pengusul/pelaksana | Pemberi masukan | Pemberi keputusan/approval |
| --- | --- | --- | --- |
| visi, arah, dan prioritas perusahaan | Product Owner, ChatGPT | pimpinan dan owner terkait | Beriman / Product Owner |
| scope serta penerimaan produk | Product Owner atau product lead | pengguna, operator, ChatGPT | Product Owner yang ditunjuk |
| pilihan architecture material | ChatGPT, Codex, technical owner | owner data, security, operations | human owner sesuai risiko; Beriman untuk high/critical |
| implementasi low risk | Codex, HemuHemu, kontributor | reviewer bila diperlukan | trusted change policy |
| implementasi medium risk | Codex atau HemuHemu | reviewer teknis dan owner domain | approver PR/delegated owner |
| auth, permission, payment, refund, settlement, data finansial | owner domain dan implementer | technical, finance, operations | human owner yang berwenang; tidak boleh AI-only |
| perubahan source of truth | owner domain, ChatGPT, technical owner | seluruh sistem terdampak | Beriman / Product Owner melalui ADR |
| deployment low risk | implementer | automated checks | sesuai kebijakan repository |
| deployment high/critical | implementer | reviewer, operator, owner domain | human approver sebelum deploy |

## Aturan Keputusan

1. **Kewenangan mengikuti domain.** Akses tool tidak sama dengan hak keputusan.
2. **Delegasi harus terlihat.** Delegasi menyebut scope, masa berlaku atau kondisi berakhir, dan tindakan yang diizinkan.
3. **Keputusan material harus durable.** Catat di PRD, ADR, issue, SOP, data contract, atau acceptance record.
4. **Diam bukan approval.** Ketiadaan respons tidak boleh dianggap persetujuan untuk high/critical risk.
5. **Konflik dihentikan dan dieskalasi.** Jika dua owner memberi instruksi yang bertentangan, pekerjaan berisiko berhenti sampai ada keputusan yang tercatat.
6. **AI tidak menerima risiko atas nama manusia.** AI boleh memberikan analisis dan recommendation.

## Bentuk Acceptance Record

Minimal mencatat:

- artifact atau perubahan yang diterima;
- acceptance criteria yang diperiksa;
- evidence;
- nama human owner;
- tanggal;
- limitation atau follow-up yang diterima.

Approval di pull request dapat menjadi acceptance record jika isi PR memuat informasi tersebut.

## Open Decision

Belum ada batas nominal resmi yang menentukan kapan transaksi atau perubahan keuangan masuk tingkat medium atau high/critical. Sampai diputuskan, klasifikasi dilakukan berdasarkan dampak, reversibility, permission, dan sensitivitas domain; kasus meragukan dinaikkan tingkat risikonya. Batas nominal tidak boleh dikarang oleh agen.
