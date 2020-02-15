'use strict';

module.exports = {
  extends: 'octane',

  rules: {
    'no-inline-styles': {
      allowDynamicStyles: true
    },
    'no-invalid-interactive': false
  },

  ignore: [
    'app/templates/components/icons/**'
  ]
};
