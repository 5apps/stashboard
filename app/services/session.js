import SessionService from 'ember-simple-auth/services/session';
import config from '../config/environment';
import window from 'ember-window-mock';

export default SessionService.extend({

  userTriggeredSignout: false,

  authenticateWithImplicitGrant() {
    const clientId = 'storage-frontend';
    const redirectURI = `${window.location.origin}${config.rootURL}callback`;
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

