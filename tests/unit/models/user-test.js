import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | user', function(hooks) {
  setupTest(hooks);

  test('storageHost', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('user', {
      storageAddress: 'simon@podere-casarotta.it'
    }));

    assert.equal(model.get('storageHost'), 'podere-casarotta.it');
  });

});
