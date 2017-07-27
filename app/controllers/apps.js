import Ember from 'ember';

const { Controller, inject: { service } } = Ember;

export default Controller.extend({

  currentUser: service(),

  actions: {
    revokeAccess(auth) {
      auth.destroyRecord();
    }
  }

});
