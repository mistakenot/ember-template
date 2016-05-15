import Ember from 'ember';
import ErrorHandlingMixinMixin from 'client/mixins/error-handling-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | error handling mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let ErrorHandlingMixinObject = Ember.Object.extend(ErrorHandlingMixinMixin);
  let subject = ErrorHandlingMixinObject.create();
  assert.ok(subject);
});
