import Ember from 'ember';
/* global Auth0Lock */

const { service } = Ember.inject;

var lock = new Auth0Lock('m2g7qIaQJngPtHOs5zl4bEHsVrSywa7W', 'ntotten-demo.auth0.com');

export default Ember.Component.extend({
  session: service('session'),


  didRender: function() {
    this._super(...arguments);

    lock.show({
            callbackURL: 'http://localhost:4200/callback'
          , responseType: 'token'
          , authParams: {
            scope: 'openid email'  // Learn about scopes: https://auth0.com/docs/scopes
          }
        });

  },

  willDestroyElement: function() {
    lock.hide();
  }
});
