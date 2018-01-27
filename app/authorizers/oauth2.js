import Ember from 'ember';
import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

const { isEmpty } = Ember;

export default OAuth2Bearer.extend({

  authorize(data, block) {
    const accessToken = data['access_token'];

    if (!isEmpty(accessToken)) {
      block('Authorization', `OAuth ${accessToken}`);
    }
  }

});
