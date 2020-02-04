import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
}

Router.map(function() {

  this.route('login');
  this.route('apps');
  this.route('callback');
  this.route('welcome');

});
