/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

import * as async from 'async';
import * as fs from 'fs';
import * as got from 'got';
import * as path from 'path';

// tslint:disable-next-line variable-name
const DecompressZip = require('decompress-zip');

const extract = (input, opts, callback) => {
  const output = Math.random() + '.zip';

  got.stream(input)
      .on('error', callback)
      .pipe(fs.createWriteStream(output))
      .on('error', callback)
      .on('finish', () => {
        const unzipper = new DecompressZip(output);

        unzipper.on('error', callback)
            .extract({
              strip: opts.strip,
              filter: (file) => {
                if (opts.filter && !opts.filter(file)) return;
                return path.extname(file.filename) === '.proto';
              },
            })
            .on('extract', () => {
              fs.unlink(output, callback);
            });
      });
};

async.series(
    [
      (next) => {
        require('child_process').exec('rm -rf google', next);
      },

      (next) => {
        extract(
            'https://github.com/googleapis/googleapis/archive/master.zip', {
              strip: 1,
            },
            next);
      },

      (next) => {
        extract(
            'https://github.com/google/protobuf/archive/master.zip', {
              strip: 2,
              filter: (file) => {
                return (
                    file.parent.indexOf('protobuf-master') === 0 &&
                    file.parent.indexOf('protobuf-master/src/') === 0 &&
                    file.parent.indexOf('/compiler') === -1 &&
                    file.parent.indexOf('/internal') === -1 &&
                    file.filename.indexOf('unittest') === -1 &&
                    file.filename.indexOf('test') === -1);
              },
            },
            next);
      },

      (next) => {
        require('child_process')
            .exec(
                '[ -d "overrides" ] && cp -R overrides/* google || echo "no overrides"',
                next);
      },
    ],
    (err) => {
      if (err) throw err;
    });
