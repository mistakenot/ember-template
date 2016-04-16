import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  beforeModel() {
    this.get('auth')
      .logout()
      .then(() => {
        this.transitionTo('index');
      })
      .catch((e) => {
        this.transitionTo('index');
        console.error(e);
      });
  }
});
