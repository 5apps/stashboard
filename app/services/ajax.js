import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import config from '../config/environment';

const { inject: { service }, computed } = Ember;

export default AjaxService.extend({

  session: service(),

  host: config.apiHost,

  headers: computed('session.authToken', {
    get() {
      let headers = {};
      const authToken = this.get('session.authToken');
      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }
      return headers;
    }
  })

});

