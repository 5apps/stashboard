import Raven from 'ember-cli-sentry/services/raven';

export default Raven.extend({

  setUserContext (user) {
    const userContext = {
      username: user.get('username')
    };

    this.callRaven('setUserContext', userContext);
  }

});
