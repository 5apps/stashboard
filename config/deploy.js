/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {},

    sentry: {
      sentryUrl: 'https://sentry.io',
      sentryOrganizationSlug: '5apps',
      sentryProjectSlug: 'storage-frontend',
      sentryBearerApiKey: process.env.SENTRY_API_TOKEN
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';

    ENV.git = {
      repo: 'git@5apps.dev:5apps_storage-frontend.git',
      branch: 'master',
      worktreePath: '/tmp/storage-frontend-deploy-development',
      commitMessage: 'Deployed %@'
    };

    ENV.pipeline = {
      disabled: {
        sentry: true,
      }
    }
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';

    ENV.git = {
      repo: 'git@5stage.com:5apps_storage-frontend.git',
      branch: 'master',
      worktreePath: '/tmp/storage-frontend-deploy-staging',
      commitMessage: 'Deployed %@'
    };

    ENV.sentry.publicUrl = 'https://storage.5stage.com/account/';
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    ENV.git = {
      repo: 'git@5apps.com:5apps_storage-frontend.git',
      branch: 'master',
      worktreePath: '/tmp/storage-frontend-deploy-production',
      commitMessage: 'Deployed %@'
    };

    ENV.sentry.publicUrl = 'https://storage.5apps.com/account/';
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
