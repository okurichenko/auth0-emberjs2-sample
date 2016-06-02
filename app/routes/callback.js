import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {

  beforeModel(transition) {
    this._super(...arguments);

    var lock = new Auth0Lock('m2g7qIaQJngPtHOs5zl4bEHsVrSywa7W', 'ntotten-demo.auth0.com');
    var options = lock.parseHash(window.location.hash);
    this.get('session').authenticate('authenticator:auth0', options).catch((reason) => {
      this.set('errorMessage', reason.error);
    });
  }
});
