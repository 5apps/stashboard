import Ember from 'ember';
import config from '../config/environment';

const { Controller, inject: { service }, computed, String } = Ember;

export default Controller.extend({

  session: service(),
  baseDomain: config.baseDomain,

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }

});
