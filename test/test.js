/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	fs = require( 'fs' ),
	path = require( 'path' ),
	parse = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// FIXTURES //

var fixture,
	fpath;

fpath = path.join( __dirname, 'fixtures', 'config.alce' );
fixture = fs.readFileSync( fpath, {
	'encoding': 'utf8'
});


// TESTS //

describe( 'utils-alce-parse', function tests() {

	it( 'should export a function', function test() {
		expect( parse ).to.be.a( 'function' );
	});

	it( 'should return an error if unable to parse a provided value', function test() {
		var err = parse( '{"beep:"boop"}' );
		assert.isTrue( err instanceof Error );
	});

	it( 'should correctly parse an ALCE file and return an object', function test() {
		var out = parse( fixture );
		assert.deepEqual( out, {
			'port': 7331,
			'address': '127.0.0.1'
		});
	});

	it( 'should correctly parse an ALCE file when provided options (ignoring the `meta` option)', function test() {
		var out = parse( fixture, {
			'meta': true
		});
		assert.deepEqual( out, {
			'port': 7331,
			'address': '127.0.0.1'
		});
	});

});
