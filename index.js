'use strict';

var getJwt = require('frau-jwt'),
	auth = require('./superagent-d2l-session-auth');

module.exports = function(opts) {
	return auth(getJwt, opts);
};
