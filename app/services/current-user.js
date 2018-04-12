import Service, { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Service.extend({

  session: service(),
  store: service(),
  raven: service(),

  user: null,

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', { me: true }).then((user) => {
        this.set('user', user);
        this.get('raven').setUserContext(user);
      });
    } else {
      return RSVP.resolve();
    }
  }

});
