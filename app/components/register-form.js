import Ember from 'ember';
import ErrorHandlingMixin from '../mixins/error-handling-mixin';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  actions: {
    onSubmit(){
      this.get('auth').registerPassword(
        this.get('email'),
        this.get('password'))
      .then(
        this.get('onSubmitSuccess'),
        (err) => {
          this.set('errorMessage', err);
        }
      );
    }
  }
});
