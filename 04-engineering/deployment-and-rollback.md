# Deployment dan Rollback

Deployment memindahkan perubahan ke environment yang digunakan. Merge dan deployment adalah dua event berbeda dan keduanya perlu diverifikasi.

## Release Readiness

Sebelum deploy, pastikan:

- commit/PR yang akan dirilis jelas;
- risk level dan approval terpenuhi;
- checks relevan lulus;
- environment variable/config tersedia tanpa membocorkan nilainya;
- migration dan urutan rilis terdokumentasi;
- backward compatibility dipertimbangkan;
- owner deploy dan owner setelah rilis jelas;
- monitoring serta rollback siap;
- patch log disiapkan.

## Deployment Record

Catat:

- repository, branch, commit, dan PR;
- environment;
- waktu;
- operator/agent;
- approval reference;
- migration/config action;
- hasil deployment;
- live verification;
- incident atau rollback jika terjadi.

## Rollout

Untuk perubahan berisiko, pertimbangkan staged rollout, feature flag, canary, read-only mode, atau dry-run. Pilihan teknis harus sesuai repository dan dicatat dalam plan; playbook tidak menetapkan satu platform tertentu.

## Live Verification

Setelah deploy:

1. pastikan deployment yang aktif memakai commit yang dimaksud;
2. uji happy path kritis;
3. uji permission atau failure case yang relevan;
4. periksa log/monitoring;
5. pastikan source/fallback status terlihat;
6. catat evidence dan limitation.

## Rollback Plan

Rollback plan minimal menjelaskan:

- trigger rollback;
- siapa yang boleh memutuskan;
- versi/kondisi aman tujuan;
- langkah code, config, dan data;
- dampak data yang sudah ditulis;
- verification setelah rollback;
- komunikasi dan audit record.

Revert code tidak selalu mengembalikan schema atau data. Migration rollback harus mempertimbangkan kehilangan data dan compatibility.

## Rollback Tidak Mungkin

Jika perubahan irreversible, nyatakan sebelum approval. Gunakan backup, forward-fix plan, staged migration, dan checkpoint yang sesuai. Alasan “tidak ada rollback” meningkatkan risk level.

## Gagal Deploy

Jangan melakukan retry berulang tanpa memahami failure. Hentikan automation bila circuit breaker terpenuhi, pertahankan log, rollback/contain sesuai plan, dan gunakan [Emergency Workflow](../02-workflows/emergency-workflow.md) bila dampaknya material.
