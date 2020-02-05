import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {

  store: service(),

  model() {
    return this.store.findAll('authorization');
  },

  afterModel(model) {
    if (isEmpty(model)) {
      this.transitionTo('welcome');
    }
  }

});
