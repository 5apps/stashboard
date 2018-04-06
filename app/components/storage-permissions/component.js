import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  permissions: null,

  parsedPermissions: computed('permissions.[]', function() {
    return this.get('permissions').map((permission) => {
      const split = permission.split(':');

      return {
        root: split[0] === '',
        directory: split[0],
        access: split[1] === 'r' ? 'read-only' : null
      }
    });
  })

});
