import { moduleFor, test } from 'ember-qunit';

moduleFor('service:current-user', 'Unit | Service | current user', {
  needs: ['service:session']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
