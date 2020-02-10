import { getOwner } from '@ember/application';
import SessionService from 'ember-simple-auth/services/session';
import SessionStorage from 'ember-simple-auth/session-stores/session-storage';
import config from '../config/environment';
import window from 'ember-window-mock';

export default SessionService.extend({

  userTriggeredSignout: false,

  authenticateWithImplicitGrant () {
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
  },

  authenticate (authenticator, hash) {
    // don't persist session data when user didn't select "remember me"
    if (hash && hash.state === 'no-remember') {
      const owner = getOwner(this);
      const store = SessionStorage.create(owner.ownerInjection(), { _isFastBoot: false });
      this.session.set('store', store);
    }

    return this._super(...arguments);
  }

});

