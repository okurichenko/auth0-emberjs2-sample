import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import config from 'starter-seed/config/environment';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {

  sessionInvalidated() {
    this.transitionTo('index');
  },

  sessionAccount: service('session-account'),

  beforeModel() {
    if (document.URL.indexOf('access_token') > -1) {
      window.location.href = `${config.Auth0.callbackUrl}?${document.URL.split('#')[1]}`;
    }
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser().catch(() => this.get('session').invalidate());
  },

  _loadCurrentUser() {
    return this.get('sessionAccount').loadCurrentUser();
  }
});
