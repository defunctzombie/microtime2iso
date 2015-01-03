var assert = require('assert');
var microtime2iso = require('..');

it('should convert whole seconds', function() {
    assert.equal(microtime2iso('1420242927'), '2015-01-02T23:55:27.000Z')
    assert.equal(microtime2iso('0'), '1970-01-01T00:00:00.000Z')
});

it('should convert with milliseconds', function() {
    assert.equal(microtime2iso('1420242927.139'), '2015-01-02T23:55:27.139Z')
});

it('should convert with more precision', function() {
    assert.equal(microtime2iso('1420242927.1393'), '2015-01-02T23:55:27.1393Z')
});

it('should convert with microseconds', function() {
    assert.equal(microtime2iso('1420242927.139321'), '2015-01-02T23:55:27.139321Z')
});

it('should reject beyond microseconds', function() {
    assert.throws(function() {
        microtime2iso('1420242927.139321567');
    }, /Invalid microsecond format/, 'unexpected error');
});

it('should reject random crap', function() {
    assert.throws(function() {
        microtime2iso('abc');
    });

    assert.throws(function() {
        microtime2iso('123.sd');
    });

    assert.throws(function() {
        microtime2iso('ab123.44');
    });
});

