import { moduleFor, test } from 'ember-qunit';

moduleFor('route:apps', 'Unit | Route | apps', {
  needs: ['service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
