import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {

  store: service(),

  model() {
    return this.get('store').findAll('authorization');
  },

  afterModel(model) {
    if (isPresent(model)) {
      this.transitionTo('apps');
    }
  }

});

