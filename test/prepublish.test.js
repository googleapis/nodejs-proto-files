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

var childProcessMock = {
  exec: sinon.stub()
}

var gotMock = {
  stream: sinon.stub().returns(makeMockStream())
}

var decompressZipMock = sinon.stub()

describe('prepublish', function () {
  before(function () {
    proxyquire('../prepublish', {
      child_process: childProcessMock,
      'decompress-zip': decompressZipMock,
      fs: {
        createWriteStream: sinon.stub()
      },
      got: gotMock
    })
  })

  it('should delete existing proto files', function () {
    assert(childProcessMock.exec.calledWith('rm -r google'))
  })

  it('should download two blobs', function () {
    childProcessMock.exec.callArg(1) // callback()
    assert(gotMock.stream.calledTwice)
  })
})
