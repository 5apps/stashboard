import { getOwner } from '@ember/application';
import SessionService from 'ember-simple-auth/services/session';
import SessionStorage from 'ember-simple-auth/session-stores/session-storage';
import config from '../config/environment';
import window from 'ember-window-mock';

export default SessionService.extend({

  userTriggeredSignout: false,

  authenticateWithImplicitGrant () {
    const clientId = 'stashboard';
    const redirectURI = `${window.location.origin}${config.rootURL}callback`;
    const responseType = 'token';
    const scope = 'rs-account';

    const oauthURL = `https://${config.baseDomain}/oauth/authorize?`
      + `client_id=${clientId}`
      + `&redirect_uri=${redirectURI}`
      + `&response_type=${responseType}`
      + `&scope=${scope}`;

    window.location.replace(oauthURL);
  },

  authenticate (authenticator, hash) {
    // check for persist-session param, sent when user checked "remember me" on sign-in
    if (hash && hash.state) {
      let state = {};
      try {
        state = JSON.parse(atob(hash.state)); // parse Base64 encoded JSON
      } catch (e) { /* ignore */ }
      if (!state['persist-session']) {
        this.switchToNonPersistentSessionStorage();
      }
    } else {
      this.switchToNonPersistentSessionStorage();
    }

    return this._super(...arguments);
  },

  switchToNonPersistentSessionStorage () {
    const owner = getOwner(this);
    const store = SessionStorage.create(owner.ownerInjection(), { _isFastBoot: false });
    this.session.set('store', store);
  }

});

