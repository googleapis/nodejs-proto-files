/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

import * as assert from 'assert';
import * as pq from 'proxyquire';
import * as sinon from 'sinon';

const proxyquire = pq.noCallThru();

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

describe('prepublish', () => {
  before(() => {
    proxyquire('../tools/prepublish', {
      child_process: childProcessMock,
      'decompress-zip': decompressZipMock,
      fs: {
        createWriteStream: sinon.stub(),
      },
      got: gotMock,
    });
  });

  it('should delete existing proto files', () => {
    assert(childProcessMock.exec.calledWith('rm -rf google'));
  });

  // tslint:disable-next-line ban
  it.skip('should download two blobs', () => {
    childProcessMock.exec.callArg(1); // callback()
    assert(gotMock.stream.calledTwice);
  });

  // tslint:disable-next-line ban
  it.skip('should copy overrides to google directory', () => {
    assert(childProcessMock.exec.calledWith('cp -R overrides/* google'));
  });
});
