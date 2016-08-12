'use strict'

var assert = require('assert')
var proxyquire = require('proxyquire').noCallThru()
var sinon = require('sinon')

function makeMockStream () {
  return {
    on: sinon.stub().returnsThis(),
    pipe: sinon.stub().returnsThis()
  }
}

var gotMock = {
  stream: sinon.stub().returns(makeMockStream())
}

var decompressZipMock = sinon.stub()

describe('prepublish', function () {
  before(function () {
    proxyquire('../prepublish', {
      got: gotMock,
      'decompress-zip': decompressZipMock,
      fs: {
        createWriteStream: sinon.stub()
      }
    })
  })

  it('should download two blobs', function () {
    assert(gotMock.stream.calledTwice)
  })
})
