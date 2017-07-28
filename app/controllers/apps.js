import Ember from 'ember';

const { Controller, inject: { service }, computed } = Ember;

export default Controller.extend({

  currentUser: service(),

  appsCount: computed('model.[]', function() {
    return this.get('model.length');
  }),

  categoriesCount: computed('model.@each.permissions', function() {
    const permissions = this.get('model').map((auth) => {
      return auth.get('permissions').map((permission) => {
        return permission.split(':')[0];
      });
    });

    return [].concat(...permissions).uniq().length;
  }),

  actions: {
    revokeAccess(auth) {
      auth.destroyRecord();
    }
  }

});
