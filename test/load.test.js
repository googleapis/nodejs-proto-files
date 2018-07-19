'use strict';

var assert = require('assert');
var googleProtoFiles = require('../');
var path = require('path');
var protobuf = require('protobufjs');

describe('load', function() {
  var TEST_FILE = path.join(__dirname, 'fixtures', 'library.proto');
  it('should not be able to load test file using protobufjs directly', function(done) {
    protobuf
      .load(TEST_FILE)
      .then(function() {
        done(Error('should not get here'));
      })
      .catch(function() {
        done();
      });
  });

  // note: this test uses downloaded protos that should be installed
  // before running the test. Please make sure to run
  // `npm run prepublishOnly`
  // before running `npm test`.
  it('should load a test file that relies on common protos', function(done) {
    googleProtoFiles
      .load(TEST_FILE)
      .then(function(root) {
        assert(root instanceof protobuf.Root);
        assert(
          root.lookup('google.example.library.v1.LibraryService') instanceof
            protobuf.Service
        );
        assert(root.lookup('test.TestMessage') instanceof protobuf.Type);
        done();
      })
      .catch(done);
  });
});

describe('loadSync', function() {
  var TEST_FILE = path.join(__dirname, 'fixtures', 'library.proto');
  it('should not be able to load test file using protobufjs directly', function() {
    var root = protobuf.loadSync(TEST_FILE);
    // Common proto that should not have been loaded.
    assert.strictEqual(root.lookup('google.api.Http'), null);
  });

  it('should load a test file that relies on common protos', function() {
    var root = googleProtoFiles.loadSync(TEST_FILE);
    assert(root instanceof protobuf.Root);
    assert(
      root.lookup('google.example.library.v1.LibraryService') instanceof
        protobuf.Service
    );
    assert(root.lookup('test.TestMessage') instanceof protobuf.Type);
  });
});
