import DS from 'ember-data';
import { computed } from '@ember/object';

const { Model, attr } = DS;

export default Model.extend({

  username: attr(),
  firstName: attr(),
  lastName: attr(),
  email: attr(),
  avatarUrl: attr(),
  roles: attr('array'),
  sites: attr('array'),
  storageAddress: attr(),
  storageSize: attr(),
  storageSizeInPercent: attr(),
  maximumStorageSize: attr(),

  storageHost: computed('storageAddress', function () {
    return this.storageAddress.split('@')[1];
  })

});

