'use strict';

module.exports = {
  extends: 'octane',

  rules: {
    'no-inline-styles': {
      allowDynamicStyles: true
    },
    'no-action-modifiers': false,
    'no-curly-component-invocation': false
  },

  ignore: [
    'app/templates/components/icons/**'
  ]
};
