import Ember from 'ember';
import DS from 'ember-data';
import moment from 'moment';

const { computed } = Ember;
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
    return moment(this.get('expireAt')).format('YYYY-MM-DD[T]HH:mm');
  }),

  expireAtDateTitle: computed('expireAt', function() {
    return moment(this.get('expireAt')).format('YYYY-MM-DD [at] HH:mm');
  }),

  createdAtDatetime: computed('createdAt', function() {
    return moment(this.get('createdAt')).format('YYYY-MM-DD[T]HH:mm');
  }),

  createdAtDateTitle: computed('createdAt', function() {
    return moment(this.get('createdAt')).format('YYYY-MM-DD [at] HH:mm');
  })

});

