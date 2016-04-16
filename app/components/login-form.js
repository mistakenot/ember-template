import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  actions: {
    useFacebook() {
      this.get('auth')
        .withFacebook();
    },
    usePassword() {
      this.set('error', null);
      this.get('auth')
        .withPassword(this.get('email'), this.get('password'))
        .then((data) => {
          this.get('onSubmit')(data);
        })
        .catch(err => {
          this.set('error', err.message);
        });
    }
  }
});
