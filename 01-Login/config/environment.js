/* jshint node: true */

var auth0 = require('../auth0-variables');

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'starter-seed',
    environment: environment,
    rootURL: '/demo',
    locationType: 'hash',
    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false,
      },
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    Auth0: {
      clientId: auth0.AUTH0_CLIENT_ID,
      domain: auth0.AUTH0_DOMAIN,
      callbackUrl: 'http://localhost:4200/demo/#/callback',
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
