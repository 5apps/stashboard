import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import config from '../config/environment';

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
