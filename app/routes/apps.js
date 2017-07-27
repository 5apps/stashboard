import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { Route, inject: { service } } = Ember;

export default Route.extend(AuthenticatedRouteMixin, {

  store: service(),

  model() {
    return this.get('store').findAll('authorization');
  }

});
