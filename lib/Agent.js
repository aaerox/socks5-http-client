/**
 * @overview
 * @author Matthew Caruana Galizia <m@m.cg>
 * @license MIT
 * @copyright Copyright (c) 2013, Matthew Caruana Galizia
 * @preserve
 */

'use strict';

/*jshint node:true*/

var http = require('http');
var inherits = require('util').inherits;
var socksClient = require('socks5-client');

function Socks5ClientHttpAgent(options) {
	http.Agent.call(this, options);

	this.socksHost = options.socksHost || 'localhost';
	this.socksPort = options.socksPort || 1080;
	this.username = options.username;
	this.password = options.password;
	this.createConnection = socksClient.createConnection;
}

inherits(Socks5ClientHttpAgent, http.Agent);

module.exports = Socks5ClientHttpAgent;
