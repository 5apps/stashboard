import Ember from 'ember';

const { Controller, inject: { service }, computed } = Ember;

export default Controller.extend({

  currentUser: service(),

  appsCount: computed('model.[]', function() {
    return this.get('model.length');
  }),

  actions: {
    revokeAccess(auth) {
      auth.destroyRecord();
    }
  }

});
