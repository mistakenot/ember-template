import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    onSubmitSuccess() {
      this.transitionTo('login');
    }
  }
});
