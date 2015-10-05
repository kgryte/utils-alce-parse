'use strict';

// MODULES //

var alce = require( 'alce' );


// PARSE //

/**
* FUNCTION: parse( value[, options] )
*	Attempts to parse a value as ALCE.
*
* @param {String} value - value to parse
* @param {Object} [options] - function options
* @returns {Object|Error} parsed value or an error
*/
function parse( value, options ) {
	var opts;
	if ( arguments.length > 1 ) {
		opts = options;
		opts.meta = false;
	} else {
		opts = {
			'meta': false
		};
	}
	try {
		return alce.parse( value, opts );
	} catch ( error ) {
		return error;
	}
} // end FUNCTION parse()


// EXPORTS //

module.exports = parse;
