import Ember from 'ember';

export default Ember.Component.extend({
  braintreeClientToken: '',

  actions: {
    submit() {
      console.log(this.get('braintreeClientToken'));
    }
  }
});
