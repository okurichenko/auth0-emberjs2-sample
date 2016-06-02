// app/authenticators/custom.js
import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP, isEmpty, run, computed } = Ember;

export default Base.extend({

  /**
    The auth0Domain to be sent to the authentication server (see
    https://tools.ietf.org/html/rfc6749#appendix-A.1). __This should only be
    used for statistics or logging etc. as it cannot actually be trusted since
    it could have been manipulated on the client!__

    @property auth0Domain
    @type String
    @default null
    @public
  */
  auth0Domain: null,

  /**
    The client_id to be sent to the authentication server (see
    https://tools.ietf.org/html/rfc6749#appendix-A.1). __This should only be
    used for statistics or logging etc. as it cannot actually be trusted since
    it could have been manipulated on the client!__

    @property clientId
    @type String
    @default null
    @public
  */
  clientId: null,


  restore(data) {

  },
  authenticate(options) {
    return new RSVP.Promise((resolve, reject) => {
      resolve(options);
    });
  },
  invalidate(data) {

  }
});
