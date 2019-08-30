'use strict';

module.exports = {
  extends: 'recommended',

  rules: {
    'no-inline-styles': {
      allowDynamicStyles: true
    }
  },

  ignore: [
    'app/templates/components/icons/**',
    'app/templates/components/brand/**'
  ]
};
