import SessionService from 'ember-simple-auth/services/session';
import config from '../config/environment';

export default SessionService.extend({

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

