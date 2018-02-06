import Ember from 'ember';
import config from '../config/environment';

const { Controller, inject: { service } } = Ember;

export default Controller.extend({

  session: service(),
  currentUser: service(),
  baseDomain: config.baseDomain,

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }

});
