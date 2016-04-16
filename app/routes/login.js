import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    onSubmit(data) {
      this.transitionTo('index');
    }
  }
});
