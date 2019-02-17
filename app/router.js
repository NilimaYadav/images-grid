import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('photos', function() {
   this.route('show', { path: '/:id/show' });
  });
});

export default Router;
