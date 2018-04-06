import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | apps', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:apps');
    assert.ok(route);
  });
});
