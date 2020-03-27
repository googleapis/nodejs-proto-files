// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {before, describe, it} from 'mocha';
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
