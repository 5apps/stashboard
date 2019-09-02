import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { run } from '@ember/runloop'

module('Integration | Component | app authorization', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.store = this.owner.lookup('service:store');
  });

  test('it renders', async function(assert) {
    run(() => {
      const auth = this.store.createRecord('authorization', {
        appName: 'My fancy app',
        launchUrl: 'http://fancyapp.5apps.com',
        clientId: 'fancyapp.5apps.com',
        permissions: ['documents:rw', 'shares:r'],
        createdAt: '2018-04-05T21:59:23.505Z'
      });

      this.set('auth', auth);
    });

    await render(hbs`{{app-authorization auth=auth}}`);

    assert.dom('.app-name h4').hasText('My fancy app');
  });
});
