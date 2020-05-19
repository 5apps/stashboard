'use strict';

const deployTarget = process.env.DEPLOY_TARGET;
const appVersion = require('../package.json').version;

if (deployTarget) {
  const path = require('path');
  const envPath = path.resolve(process.cwd(), `.env.${deployTarget}`);
  require('dotenv').config({ path: envPath });
}

// This will not override deploy-target-specific variables
require('dotenv').config();

module.exports = function(environment) {

  let ENV = {
    modulePrefix: 'stashboard',
    environment,
    rootURL: '/',
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

    baseDomain: process.env.BASE_DOMAIN,
    apiHost: process.env.API_HOST,

    sentry: {
      dsn: process.env.SENTRY_DSN,
      development: true,
      ravenOptions: {
        release: appVersion
      }
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

    ENV.baseDomain = 'example.com';
    ENV.apiHost = 'https://api.example.com';
  }

  if (deployTarget === 'staging') {
    ENV.sentry.development = false;
    ENV.sentry.ravenOptions.environment = 'staging';
  }

  if (deployTarget === 'production') {
    ENV.sentry.development = false;
    ENV.sentry.ravenOptions.environment = 'production';
  }

  return ENV;
};
