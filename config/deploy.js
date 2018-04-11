/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';

    ENV.git = {
      repo: 'git@5apps.dev:5apps_storage-frontend.git',
      branch: 'master',
      worktreePath: '/tmp/storage-frontend-deploy',
      commitMessage: 'Deployed %@'
    };
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';

    ENV.git = {
      repo: 'git@5stage.com:5apps_storage-frontend.git',
      branch: 'master',
      worktreePath: '/tmp/storage-frontend-deploy',
      commitMessage: 'Deployed %@'
    };
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    ENV.git = {
      repo: 'git@5apps.com:5apps_storage-frontend.git',
      branch: 'master',
      worktreePath: '/tmp/storage-frontend-deploy',
      commitMessage: 'Deployed %@'
    };

  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
