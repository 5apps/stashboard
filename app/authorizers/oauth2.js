import { isEmpty } from '@ember/utils';
import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

export default OAuth2Bearer.extend({

  authorize(data, block) {
    const accessToken = data['access_token'];

    if (!isEmpty(accessToken)) {
      block('Authorization', `OAuth ${accessToken}`);
    }
  }

});
