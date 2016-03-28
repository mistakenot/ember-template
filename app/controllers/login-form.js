import Ember from 'ember';
import OauthAuthenticator from '/authenticators/oauth2';

export default Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, {
  authenticator: OauthAuthenticator,
  session: Ember.inject.service('session'),
  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session')
        .authenticate('authenticator:oauth2', identification, password)
        .catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
    }
  }
});
