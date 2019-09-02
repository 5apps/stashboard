import Component from '@ember/component';
import { inject as service } from '@ember/service';
import config from '../config/environment';

export default Component.extend({

  tagName: '',

  session: service(),
  currentUser: service(),

  baseDomain: config.baseDomain,

  actions: {
    logout () {
      this.set('session.userTriggeredSignout', true);
      this.session.invalidate();
    }
  }

});
