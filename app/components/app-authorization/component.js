import Component from '@glimmer/component';
import { action } from '@ember/object';
import { run } from '@ember/runloop';

export default class AppAuthorizationComponent extends Component {

  @action
  toggleOpenClass (evt) {
    const elMeta = evt.target.closest('div.auth').querySelector('.metadata');
    const elActions = elMeta.nextElementSibling;
    elMeta.classList.toggle('open');
    elActions.classList.toggle('open');
  }

  @action
  revoke (evt) {
    evt.target.closest('div.auth')
       .classList.add('fade-out');

    run.later(this, function() {
      this.args.revokeAccess(this.args.auth);
    }, 300);
  }

}
