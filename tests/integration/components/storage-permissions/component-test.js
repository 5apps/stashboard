import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | storage permissions', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('permissions', ['documents:rw', 'shares:r']);

    await render(hbs`{{storage-permissions permissions=permissions}}`);

    assert.dom(this.element.querySelector('.permission:first-child .directory')).hasText('documents');
    assert.equal(this.element.querySelectorAll('.permission:first-child .access').length, 0);

    assert.dom(this.element.querySelector('.permission:last-child .directory')).hasText('shares');
    assert.dom(this.element.querySelector('.permission:last-child .access')).hasText('read-only');
  });
});
