import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';
import { isPresent } from '@ember/utils';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {

  host: config.apiHost,

  authorize (xhr) {
    const { access_token } = this.get('session.data.authenticated');

    if (isPresent(access_token)) {
      xhr.setRequestHeader('Authorization', `OAuth ${access_token}`);
    }
  },

  pathForType() {
    const normalizedType = this._super(...arguments);

    if (normalizedType === 'users') {
      return normalizedType;
    }

    return `storage/${normalizedType}`;
  }

});

