import Ember from 'ember';

const { Service, inject: { service }, RSVP } = Ember;

export default Service.extend({

  session: service(),
  store: service(),

  user: null,

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', { me: true }).then((user) => {
        this.set('user', user);
      });
    } else {
      return RSVP.resolve();
    }
  }

});
