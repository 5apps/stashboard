import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | storage permissions', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('permissions', ['documents:rw', 'shares:r']);

    await render(hbs`{{storage-permissions permissions=permissions}}`);

    assert.equal(this.$('.permission:first .directory').text().trim(), 'documents');
    assert.equal(this.$('.permission:first .access').length, 0);

    assert.equal(this.$('.permission:last .directory').text().trim(), 'shares');
    assert.equal(this.$('.permission:last .access').text().trim(), 'read-only');
  });
});
