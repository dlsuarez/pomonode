var libpath = '../lib';

require('../src/mongo')
require('../model/User')
var assert = require('chai').assert
var expect = require('chai').expect
var should = require('chai').should

describe('Mongo', function() {
	var db = new Mongo(
		'localhost',
		'test',
		new User()
	);

	beforeEach(function(done) {
		db.clear();
		done();
	})

	describe('all()', function() {
		it('respond with all records', function(done){
			db.all(function(data) {
				var all = data;
				expect(all).to.be.empty;
				done();
			});   
		})
	})

	assert.instanceOf(db, Mongo, 'db is an instance of Mongo');
})
