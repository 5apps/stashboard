import Component from '@ember/component';
import { run } from '@ember/runloop';

export default Component.extend({

  classNames: ['auth'],

  auth: null,

  click () {
    const elMeta = this.element.querySelector('.metadata');
    const elActions = elMeta.nextElementSibling;
    elMeta.classList.toggle('open');
    elActions.classList.toggle('open');
  },

  actions: {

    revoke (auth) {
      this.element.classList.add('fade-out');
      run.later(this, function() {
        this.revokeAccess(auth);
      }, 300);
    }

  }

});
