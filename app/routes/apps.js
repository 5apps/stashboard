import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { Route, inject: { service }, isEmpty } = Ember;

export default Route.extend(AuthenticatedRouteMixin, {

  store: service(),

  model() {
    return this.get('store').findAll('authorization');
  },

  afterModel(model) {
    if (isEmpty(model)) {
      this.transitionTo('welcome');
    }
  }

});
