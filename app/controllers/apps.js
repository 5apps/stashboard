import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action, computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default class AppsController extends Controller {

  @service currentUser;

  @computed('model.[]')
  get appsCount () {
    return this.get('model.length');
  }

  @computed('model.@each.permissions')
  get categoriesCount () {
    const permissions = this.model.map((auth) => {
      return auth.get('permissions').map((permission) => {
        return permission.split(':')[0];
      });
    });

    return [].concat(...permissions).uniq().length;
  }

  @action
  revokeAccess (auth) {
    auth.destroyRecord().then(() => {
      if (isEmpty(this.model)) {
        this.transitionToRoute('welcome');
      }
    });
  }

}
