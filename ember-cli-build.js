'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'node_modules/bourbon/core'
      ]
    },

    sourcemaps: {
      enabled: true,
      extensions: ['js']
    },

    fingerprint: {
      exclude: [
        'icon.svg',
        'icon_x64.png',
        'icon_x128.png',
        'icon_x192.png',
        'icon_x256.png',
        'icon_x512.png'
      ]
    },

    'asset-cache': {
      include: [
        'assets/**/*',
        'favicon.ico'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
