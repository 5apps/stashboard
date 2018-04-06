import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { run } from '@ember/runloop'

moduleForComponent('app-authorization', 'Integration | Component | app authorization', {
  integration: true,

  beforeEach () {
    this.inject.service('store');
  }
});

test('it renders', function(assert) {
  run(() => {
    const auth = this.store.createRecord('authorization', {
      appName: 'My fancy app',
      launchUrl: 'http://fancyapp.5apps.com',
      clientId: 'fancyapp.5apps.com',
      permissions: ['documents:rw', 'shares:r'],
      createdAtDatetime: '2018-04-05T21:59:23.505Z'
    });

    this.set('auth', auth);
  });

  this.render(hbs`{{app-authorization auth=auth}}`);

  assert.equal(this.$('.app-name h4').text().trim(), 'My fancy app');
});
