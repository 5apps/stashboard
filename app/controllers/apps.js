import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import $ from 'jquery';

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
      $(`.auth[data-id=${auth.get('id')}]`).fadeOut();

      auth.destroyRecord().then(() => {
        if (isEmpty(this.get('model'))) {
          this.transitionToRoute('welcome');
        }
      });
    }
  }

});
