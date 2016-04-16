import Ember from 'ember';
import ConfigurationMixinMixin from 'client/mixins/configuration-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | configuration mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let ConfigurationMixinObject = Ember.Object.extend(ConfigurationMixinMixin);
  let subject = ConfigurationMixinObject.create();
  assert.ok(subject);
});
