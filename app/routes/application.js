import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import config from '../config/environment';

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
    if (this.get('controller.userTriggeredSignout')) {
      window.location.replace(`https://${config.baseDomain}/storage/users/sign_out`);
      return;
    }

    // re-authenticate when token expired
    this.get('session').authenticateWithImplicitGrant();
  },

  _loadCurrentUser() {
    return this.get('currentUser').load().catch((response) => {
      if (response.errors[0].status === "401") {
        this.get('session').invalidate();
      }

      // TODO show error message
    });
  }

});

