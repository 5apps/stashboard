import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('storage-permissions', 'Integration | Component | storage permissions', {
  integration: true
});

test('it renders', function(assert) {
  this.set('permissions', ['documents:rw', 'shares:r']);

  this.render(hbs`{{storage-permissions permissions=permissions}}`);

  assert.equal(this.$('.permission:first .directory').text().trim(), 'documents');
  assert.equal(this.$('.permission:first .access').length, 0);

  assert.equal(this.$('.permission:last .directory').text().trim(), 'shares');
  assert.equal(this.$('.permission:last .access').text().trim(), 'read-only');
});
