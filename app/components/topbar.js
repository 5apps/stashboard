import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  tagName: '',

  session: service(),
  currentUser: service(),

  actions: {
    logout () {
      this.set('session.userTriggeredSignout', true);
      this.session.invalidate();
    }
  }

});
