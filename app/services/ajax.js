import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import AjaxService from 'ember-ajax/services/ajax';
import config from '../config/environment';
import { isPresent } from '@ember/utils';

export default AjaxService.extend({

  session: service(),

  host: config.apiHost,

  headers: computed('session.data.authenticated.access_token', {
    get() {
      let headers = {};
      const { access_token } = this.get('session.data.authenticated');

      if (isPresent(access_token)) {
        headers['Authorization'] = `OAuth ${access_token}`;
      }

      return headers;
    }
  })

});

