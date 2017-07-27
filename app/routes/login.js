import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import config from '../config/environment';

const { Route, inject: { service } } = Ember;

export default Route.extend(UnauthenticatedRouteMixin, {

  session: service(),

  redirect() {
    this.authenticateWithImplicitGrant();
  },

  authenticateWithImplicitGrant() {
    const clientId = 'storage-frontend';
    const redirectURI = `${window.location.origin}/callback`;
    const responseType = 'token';
    const scope = 'storage-frontend';

    const oauthURL = `https://${config.baseDomain}/oauth/authorize?`
      + `client_id=${clientId}`
      + `&redirect_uri=${redirectURI}`
      + `&response_type=${responseType}`
      + `&scope=${scope}`;

    window.location.replace(oauthURL);
  }

});

