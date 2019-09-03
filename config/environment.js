'use strict';

module.exports = function(environment) {

  const deployTarget = process.env.DEPLOY_TARGET;

  let ENV = {
    modulePrefix: 'storage-frontend',
    environment,
    rootURL: '/dashboard/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    baseDomain: '5apps.dev',
    apiHost: 'https://api.5apps.dev',

    sentry: {
      dsn: 'https://97e0666aac54498ba23adef4993055d3@sentry.io/1188030',
      development: true,
      ravenOptions: {}
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.sentry.debug = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (deployTarget === 'production') {
    ENV.baseDomain = '5apps.com';
    ENV.apiHost = 'https://api.5apps.com';

    ENV.sentry.development = false;
    ENV.sentry.ravenOptions.environment = 'production';
  }

  if (deployTarget === 'staging') {
    ENV.baseDomain = '5stage.com';
    ENV.apiHost = 'https://api.5stage.com';

    ENV.sentry.development = false;
    ENV.sentry.ravenOptions.environment = 'staging';
  }

  return ENV;
};
