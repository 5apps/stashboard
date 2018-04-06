import Component from '@ember/component';

export default Component.extend({

  classNames: ['auth'],

  auth: null,

  click () {
    const elMeta = this.$('.metadata')[0];
    const elActions = elMeta.nextElementSibling;
    elMeta.classList.toggle('open');
    elActions.classList.toggle('open');
  },

  actions: {

    revoke (auth) {
      this.revokeAccess(auth);
    }

  }

});
