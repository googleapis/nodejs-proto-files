'use strict'

var assert = require('assert')
var proxyquire = require('proxyquire').noCallThru()

describe('findIncludePath', function () {
  it('should throw an error if a file is not found', function () {
    var findIncludePath = proxyquire('../util', {
      fs: {
        existsSync: function () { return false }
      }
    }).findIncludePath

    assert.throws(
        findIncludePath.bind(null, '/test/path/location', 'test/import.proto'))
  })

  it('should return the correct resolved import path', function () {
    var correctPath = '/test/example/import.proto'
    var findIncludePath = proxyquire('../util', {
      fs: {
        existsSync: function (path) {
          return path === correctPath
        }
      }
    }).findIncludePath

    assert.equal(
        findIncludePath('/test/path/location/', 'example/import.proto'),
        correctPath)
  })
})
