'use strict';

module.exports = {
  extends: 'octane',

  rules: {
    'no-inline-styles': {
      allowDynamicStyles: true
    }
  },

  ignore: [
    'app/templates/components/icons/**'
  ]
};
