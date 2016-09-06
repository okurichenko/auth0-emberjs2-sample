/* global Auth0Lock */

import Ember from 'ember';
import config from 'starter-seed/config/environment';

const { service } = Ember.inject;

var lock = new Auth0Lock(config.Auth0.clientId, config.Auth0.domain);

export default Ember.Component.extend({
  didRender: function() {
    this._super(...arguments);
    lock.show({
      callbackURL: 'http://localhost:4200/callback',
      responseType: 'token',
      authParams: {
        scope: 'openid email'  // Learn about scopes: https://auth0.com/docs/scopes
      }
    });

  },

  willDestroyElement: function() {
    lock.hide();
  }
});
