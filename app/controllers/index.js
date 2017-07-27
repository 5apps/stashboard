import Ember from 'ember';
import config from '../config/environment';

const { Controller, inject: { service }, computed, isEmpty } = Ember;

export default Controller.extend({

  currentUser: service(),

  username: Ember.computed.alias('currentUser.user.username'),

  userAddress: computed('username', function() {
    const username = this.get('username');

    if (isEmpty(username)) {
      return 'unknown';
    }

    return `${this.get('username')}@${config.baseDomain}`;
  })

});
