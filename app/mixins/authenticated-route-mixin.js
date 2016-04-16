import Ember from 'ember';

export default Ember.Mixin.create({
  session: Ember.inject.service(),

  beforeModel(transition) {
    if (!this.get('session.isAuthenticated')) {
      transition.abort();
      this.set('session.attemptedTransition', transition);
      this.transitionTo('login');
    } else {
      return this._super(...arguments);
    }
  }
});
