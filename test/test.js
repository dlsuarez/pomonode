var libpath = '../lib';

require('../src/mongo')
require('../model/User')
var assert = require('chai').assert
var expect = require('chai').expect
var should = require('chai').should

describe('Mongo,', function() {
	var db = new Mongo(
		'localhost',
		'test',
		new User()
	);

	beforeEach(function(done) {
		db.clear(function() {});
		done();
	})

	describe('"all" method,', function() {
		it('respond with all records', function(done) {
			db.all(function(data) {
				expect(data).to.be.empty;
				done();
			});
		})
	})

	describe('"save" method,', function() {
		it('insert a new record in a table', function(done) {
			db.save({ name: "aName" }, function(newRecord) {
				db.all(function(data) {
					expect(data).not.to.be.empty;
					expect(data[0]['name']).to.equal("aName");
					done();
				});
			});
		})
	})

	assert.instanceOf(db, Mongo, 'db is an instance of Mongo');
})
