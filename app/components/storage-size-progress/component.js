import Ember from 'ember';

const { Component, computed, String } = Ember;

export default Component.extend({

  classNames: ['progress_indicator'],
  percent: null,

  warningLevel: computed('percent', function() {
    const percent = this.get('percent');

    if (percent >= 75 && percent <= 89) {
      return 'warn';
    }

    if (percent >= 90) {
      return 'critical';
    }

    return 'info'
  }),

  style: computed('percent', function() {
    const width = this.get('percent') > 1 ? this.get('percent') : 1;

    return String.htmlSafe(`width: ${width}%`);
  })

});

