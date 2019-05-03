/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

import * as assert from 'assert';
import * as path from 'path';
import * as protobuf from 'protobufjs';

import * as googleProtoFiles from '../src';

describe('load', () => {
  const TEST_FILE = path.join(
    __dirname,
    '../../test',
    'fixtures',
    'library.proto'
  );
  it('should not be able to load test file using protobufjs directly', done => {
    protobuf
      .load(TEST_FILE)
      .then(() => {
        done(Error('should not get here'));
      })
      .catch(() => {
        done();
      });
  });

  // note: this test uses downloaded protos that should be installed
  // before running the test. Please make sure to run
  // `npm run prepublishOnly`
  // before running `npm test`.
  it('should load a test file that relies on common protos', done => {
    googleProtoFiles
      .load(TEST_FILE)
      .then(root => {
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

describe('loadSync', () => {
  const TEST_FILE = path.join(
    __dirname,
    '../../test/fixtures',
    'library.proto'
  );
  it('should not be able to load test file using protobufjs directly', () => {
    const root = protobuf.loadSync(TEST_FILE);
    // Common proto that should not have been loaded.
    assert.strictEqual(root.lookup('google.api.Http'), null);
  });

  it('should load a test file that relies on common protos', () => {
    const root = googleProtoFiles.loadSync(TEST_FILE);
    assert(root instanceof protobuf.Root);
    assert(
      root.lookup('google.example.library.v1.LibraryService') instanceof
        protobuf.Service
    );
    assert(root.lookup('test.TestMessage') instanceof protobuf.Type);
  });
});
