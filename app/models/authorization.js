import { computed } from '@ember/object';
import DS from 'ember-data';
import moment from 'moment';

const { Model, attr } = DS;

export default Model.extend({

  appName: attr(),
  launchUrl: attr(),
  permissions: attr('array'),
  clientId: attr(),
  redirectUri: attr(),
  iconUrl: attr(),
  expireAt: attr('date'),
  createdAt: attr('date'),

  expireAtDatetime: computed('expireAt', function() {
    return moment(this.expireAt).format('YYYY-MM-DD[T]HH:mm');
  }),

  expireAtDateTitle: computed('expireAt', function() {
    return moment(this.expireAt).format('YYYY-MM-DD [at] HH:mm');
  }),

  createdAtDatetime: computed('createdAt', function() {
    return moment(this.createdAt).format('YYYY-MM-DD[T]HH:mm');
  }),

  createdAtDateTitle: computed('createdAt', function() {
    return moment(this.createdAt).format('YYYY-MM-DD [at] HH:mm');
  })

});

