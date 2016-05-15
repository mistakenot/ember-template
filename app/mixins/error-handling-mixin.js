import Ember from 'ember';

export default Ember.Mixin.create({
  onError: function(err) {
    this.set('errorMessage', err);
  }
});
