import Ember from 'ember';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  firebase: Ember.inject.service(),

  registerPassword(email, password) {
    return this.get('firebase')
      .createUser({
        email: email,
        password: password
      }
    );
  },

  withFacebook() {
    return this
      .get('session')
      .open('firebase', { provider: 'facebook' });
  },

  withPassword(email, password) {
    return this
      .get('session')
      .open('firebase', {
        provider: 'password',
        email: email,
        password: password
      }
    );
  },

  isAuthenticated() {
    return this
      .get('session')
      .fetch()
      .isAuthenticated();
  },

  logout() {
    return this
      .get('session')
      .close();
  }

});
