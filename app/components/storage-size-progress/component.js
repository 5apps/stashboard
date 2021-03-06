import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({

  classNames: ['progress_indicator'],
  percent: null,

  warningLevel: computed('percent', function() {
    const percent = this.percent;

    if (percent >= 75 && percent <= 89) {
      return 'warn';
    }

    if (percent >= 90) {
      return 'critical';
    }

    return 'info'
  }),

  style: computed('percent', function() {
    const width = this.percent > 1 ? this.percent : 1;

    return htmlSafe(`width: ${width}%`);
  })

});

