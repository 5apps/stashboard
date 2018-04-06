import Component from '@ember/component';

export default Component.extend({

  tagName: 'p',
  opened: false,

  click() {
    this.toggleProperty('opened');
  }

});
