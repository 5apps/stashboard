import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'
import config from 'storage-frontend/config/environment';

export default class TopbarComponent extends Component {

  @service session;
  @service currentUser;

  baseDomain = config.baseDomain;
  frontpageUrl = 'https://'+config.baseDomain;

  @action
  logout () {
    this.set('session.userTriggeredSignout', true);
    this.session.invalidate();
  }

}
