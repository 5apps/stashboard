import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | widget demo', function(hooks) {
  setupRenderingTest(hooks);

  test('it toggles on click', async function(assert) {
    await render(hbs`{{widget-demo}}`);

    assert.ok(this.$('img').attr('src').match('rs-connect.png'));

    this.$('img').click();

    assert.ok(this.$('img').attr('src').match('rs-howto-connect.gif'));

    this.$('img').click();

    assert.ok(this.$('img').attr('src').match('rs-connect.png'));
  });
});
