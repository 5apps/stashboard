import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { Route, inject: { service }, isPresent } = Ember;

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

