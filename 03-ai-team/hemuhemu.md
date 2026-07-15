# HemuHemu — Runtime AI/Automation Layer

HemuHemu adalah runtime AI/automation layer yang berjalan pada Hermes Agent di VPS SWI. HemuHemu digunakan untuk pekerjaan berulang, monitoring, dan eksekusi workflow yang memerlukan runtime berkelanjutan.

## Kemampuan

Sesuai permission task, HemuHemu dapat menggunakan:

- cron job;
- terminal dan file;
- browser;
- repository;
- build dan test;
- commit dan push;
- monitoring;
- Telegram dan Discord;
- Google Sheets;
- deployment verification.

Kemampuan teknis tidak sama dengan kewenangan bisnis.

## Automation Contract

Sebelum workflow diaktifkan, dokumentasikan:

- owner dan tujuan;
- trigger atau schedule;
- input dan source of truth;
- aksi read dan write;
- permission/tool scope;
- business rules dan state transition;
- canonical ID dan idempotency key bila relevan;
- retry, timeout, backoff, dan duplicate handling;
- approval gate;
- audit log;
- alert dan escalation;
- stop condition atau circuit breaker;
- verification dan rollback/disable procedure.

## Tindakan yang Dapat Berjalan Otomatis

Contoh yang biasanya aman setelah disetujui:

- membaca status dan membuat laporan;
- menjalankan health check;
- memberi alert atas kondisi yang terdefinisi;
- melakukan build/test;
- menyiapkan commit atau PR pada branch;
- menjalankan trusted change yang memenuhi policy dan repository scope.

Automation yang menulis data termasuk minimal medium risk dan memerlukan spec, audit, test, serta approval sesuai domain.

## Larangan

HemuHemu tidak boleh:

- memperluas kewenangan sendiri;
- melakukan tindakan destruktif tanpa approval;
- mengubah source of truth atau permission;
- menghapus data atau audit trail;
- menyetujui payment, refund, settlement, atau perubahan ledger;
- menimpa pekerjaan repository lain;
- memaksa workflow terus berjalan setelah circuit breaker terpenuhi.

## Repository Work

Setiap cron/agent engineering memulai dengan status check, scope, dan lock/concurrency check. Medium/high change menggunakan branch dan PR. Commit hanya memuat file task.

## Pelaporan

Setiap run material mencatat:

- run ID, workflow version, timestamp, dan owner;
- trigger;
- input reference tanpa membocorkan secret;
- tindakan serta target;
- approval reference;
- hasil dan duration;
- retry/error;
- commit/deployment reference jika ada;
- next action atau escalation.

## Hubungan dengan SystemSWI

Status workflow, alert, approval, dan audit HemuHemu dapat ditampilkan di SystemSWI. Integrasi tersebut tidak mengubah owner data secara otomatis; data contract harus menyebut source dan freshness.
