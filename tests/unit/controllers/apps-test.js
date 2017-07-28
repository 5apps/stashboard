import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:apps', 'Unit | Controller | apps', {
  needs: ['service:current-user']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
