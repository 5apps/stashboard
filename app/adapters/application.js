import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {

  host: config.apiHost,
  authorizer: 'authorizer:oauth2',

  pathForType() {
    const normalizedType = this._super(...arguments);

    if (normalizedType === 'users') {
      return normalizedType;
    }

    return `storage/${normalizedType}`;
  }

});

