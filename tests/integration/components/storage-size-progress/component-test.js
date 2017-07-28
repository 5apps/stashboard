import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('storage-size-progress', 'Integration | Component | storage size progress', {
  integration: true
});

test('it renders the progress with correct percentage', function(assert) {
  this.set('storageSizeInPercent', 83);

  this.render(hbs`{{storage-size-progress percent=storageSizeInPercent}}`);

  const progressElement = this.$('.progress');

  assert.equal(progressElement[0].style.width, '83%');
});

test('it renders with a "warning" class when percentage is high', function(assert) {
  this.set('storageSizeInPercent', 78);

  this.render(hbs`{{storage-size-progress percent=storageSizeInPercent}}`);

  const progressElement = this.$('.progress');

  assert.ok(progressElement.hasClass('warn'));
});

test('it renders with a "critital" class when percentage is very high', function(assert) {
  this.set('storageSizeInPercent', 93);

  this.render(hbs`{{storage-size-progress percent=storageSizeInPercent}}`);

  const progressElement = this.$('.progress');

  assert.ok(progressElement.hasClass('critical'));
});

test('it renders with a "info" class when percentage is normal', function(assert) {
  this.set('storageSizeInPercent', 13);

  this.render(hbs`{{storage-size-progress percent=storageSizeInPercent}}`);

  const progressElement = this.$('.progress');

  assert.ok(progressElement.hasClass('info'));
});
