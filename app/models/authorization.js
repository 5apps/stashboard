import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({

  appName: attr(),
  launchUrl: attr(),
  permissions: attr('array'),
  clientId: attr(),
  redirectUri: attr(),
  iconUrl: attr(),
  expireAt: attr(),
  createdAt: attr()

});

