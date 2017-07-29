import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import config from '../config/environment';

const { Route, inject: { service } } = Ember;

export default Route.extend(ApplicationRouteMixin, {

  session: service(),
  currentUser: service(),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  sessionInvalidated() {
    window.location.replace(`https://${config.baseDomain}/storage/users/sign_out`);
  },

  _loadCurrentUser() {
    return this.get('currentUser').load().catch(() => this.get('session').invalidate());
  }

});

