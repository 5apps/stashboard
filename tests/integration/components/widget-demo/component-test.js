import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('widget-demo', 'Integration | Component | widget demo', {
  integration: true
});

test('it toggles on click', function(assert) {
  this.render(hbs`{{widget-demo}}`);

  assert.ok(this.$('img').attr('src').match('rs-connect.png'));

  this.$('img').click();

  assert.ok(this.$('img').attr('src').match('rs-howto-connect.gif'));

  this.$('img').click();

  assert.ok(this.$('img').attr('src').match('rs-connect.png'));
});
