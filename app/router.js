import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('logout');
  this.route('inbox');
  this.route('payments');
  this.route('titles', function() {
    this.route('create');
  });
});

export default Router;
