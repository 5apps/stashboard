import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | storage size progress', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the progress with correct percentage', async function(assert) {
    this.set('storageSizeInPercent', 83);

    await render(hbs`{{storage-size-progress percent=storageSizeInPercent}}`);

    const progressElement = this.element.querySelector('.progress');

    assert.equal(progressElement.style.width, '83%');
  });

  test('it renders with a "warning" class when percentage is high', async function(assert) {
    this.set('storageSizeInPercent', 78);

    await render(hbs`{{storage-size-progress percent=storageSizeInPercent}}`);

    const progressElement = this.element.querySelector('.progress');

    assert.ok(progressElement.classList.contains('warn'));
  });

  test('it renders with a "critital" class when percentage is very high', async function(assert) {
    this.set('storageSizeInPercent', 93);

    await render(hbs`{{storage-size-progress percent=storageSizeInPercent}}`);

    const progressElement = this.element.querySelector('.progress');

    assert.ok(progressElement.classList.contains('critical'));
  });

  test('it renders with a "info" class when percentage is normal', async function(assert) {
    this.set('storageSizeInPercent', 13);

    await render(hbs`{{storage-size-progress percent=storageSizeInPercent}}`);

    const progressElement = this.element.querySelector('.progress');

    assert.ok(progressElement.classList.contains('info'));
  });
});
