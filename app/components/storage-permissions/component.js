import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({

  permissions: null,

  parsedPermissions: computed('permissions.[]', function() {
    return this.get('permissions').map((permission) => {
      const split = permission.split(':');
      return {
        directory: `/${split[0]}`,
        access: split[1] === 'r' ? 'read' : 'read/write'
      }
    });
  })

});
