// import * as Sentry from '@sentry/react';

function init() {
    // Sentry.init({ dsn: "https://1192abdca52944cfb4d1c459611bffa2@o415079.ingest.sentry.io/5305619" });
}

function log(error) {
    // Sentry.captureException(error);
    console.log(error)
}

export default {
    init,
    log
}