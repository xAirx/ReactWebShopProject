import * as Sentry from '@sentry/node';
// or using CommonJS
// const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'https://9f680323fb824097b101a1ec5c11c83d@o392677.ingest.sentry.io/5240593' });

module.exports = Sentry;
