import Ember from 'ember';
import config from '../config/environment';

const { Controller, inject: { service }, computed, String } = Ember;

export default Controller.extend({

  session: service(),
  currentUser: service(),
  baseDomain: config.baseDomain,

  avatarStyle: computed('currentUser.user.avatarUrl', function() {
    return String.htmlSafe(`background-image: url(${this.get('currentUser.user.avatarUrl')})`);
  }),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }

});
