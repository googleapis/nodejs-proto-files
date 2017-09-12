'use strict'

var assert = require('assert')
var googleProtoFiles = require('../')
var path = require('path')
var protobuf = require('protobufjs')

describe('load', function () {
  var TEST_FILE = path.join(__dirname, 'fixtures', 'library.proto')
  it('should not be able to load test file using protobufjs directly', function (done) {
    protobuf.load(TEST_FILE).then(function () {
      done(Error('should not get here'))
    }).catch(function () {
      done()
    })
  })

  it('should load a test file that relies on common protos', function (done) {
    googleProtoFiles.load(TEST_FILE).then(function (root) {
      assert(root instanceof protobuf.Root)
      assert(root.lookup('google.example.library.v1.LibraryService') instanceof protobuf.Service)
      done()
    }).catch(done)
  })
})

describe('loadSync', function () {
  var TEST_FILE = path.join(__dirname, 'fixtures', 'library.proto')
  // Skipping this test. For some reason protobufjs allows you to load a proto
  // syncronously if it doesn't have access to its includes.
  it.skip('should not be able to load test file using protobufjs directly', function () {
    assert.throws(function () {
      protobuf.loadSync(TEST_FILE)
    }, Error)
  })

  it('should load a test file that relies on common protos', function () {
    var root = googleProtoFiles.loadSync(TEST_FILE)
    assert(root instanceof protobuf.Root)
    assert(root.lookup('google.example.library.v1.LibraryService') instanceof protobuf.Service)
  })
})
