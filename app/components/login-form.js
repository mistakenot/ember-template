import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticateWithOAuth2() {
      this.set('errorMessage', null)
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session')
        .authenticate('authenticator:oauth2', identification, password)
        .catch((reason) => {
          this.set('errorMessage', reason.message);
        });
    },

    authenticateWithFacebook() {
      this.get('session').authenticate('authenticator:torii', 'facebook');
    }
  }
});
