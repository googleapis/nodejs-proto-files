'use strict';

const assert = require('assert');
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');

function makeMockStream() {
  return {
    on: sinon.stub().returnsThis(),
    pipe: sinon.stub().returnsThis(),
  };
}

const childProcessMock = {
  exec: sinon.stub(),
};

const gotMock = {
  stream: sinon.stub().returns(makeMockStream()),
};

const decompressZipMock = sinon.stub();

describe('prepublish', function() {
  before(function() {
    proxyquire('../prepublish', {
      child_process: childProcessMock,
      'decompress-zip': decompressZipMock,
      fs: {
        createWriteStream: sinon.stub(),
      },
      got: gotMock,
    });
  });

  it('should delete existing proto files', function() {
    assert(childProcessMock.exec.calledWith('rm -rf google'));
  });

  it.skip('should download two blobs', function() {
    childProcessMock.exec.callArg(1); // callback()
    assert(gotMock.stream.calledTwice);
  });

  it.skip('should copy overrides to google directory', function() {
    assert(childProcessMock.exec.calledWith('cp -R overrides/* google'));
  });
});
