import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['auth'],

  auth: null,

  actions: {

    revoke (auth) {
      this.revokeAccess(auth);
    }

  }

});
