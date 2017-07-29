import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'p',
  opened: false,

  click() {
    this.toggleProperty('opened');
  }

});
