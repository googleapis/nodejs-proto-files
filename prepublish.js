'use strict'

var async = require('async')
var DecompressZip = require('decompress-zip')
var fs = require('fs')
var got = require('got')
var path = require('path')

var extract = function (input, opts, callback) {
  var output = Math.random() + '.zip'

  got.stream(input)
    .on('error', callback)
    .pipe(fs.createWriteStream(output))
    .on('error', callback)
    .on('finish', function () {
      var unzipper = new DecompressZip(output)

      unzipper
        .on('error', callback)
        .extract({
          strip: opts.strip,
          filter: function (file) {
            if (opts.filter && !opts.filter(file)) return
            return path.extname(file.filename) === '.proto'
          }
        })
        .on('extract', function () {
          fs.unlink(output, callback)
        })
    })
}

async.series([
  function (next) {
    require('child_process').exec('rm -r google', next)
  },

  function (next) {
    extract('https://github.com/google/googleapis/archive/master.zip', {
      strip: 1
    }, next)
  },

  function (next) {
    extract('https://github.com/google/protobuf/archive/master.zip', {
      strip: 2,
      filter: function (file) {
        return file.parent.indexOf('protobuf-master') === 0 &&
               file.parent.indexOf('protobuf-master/src/') === 0 &&
               file.parent.indexOf('/compiler') === -1 &&
               file.parent.indexOf('/internal') === -1 &&
               file.filename.indexOf('unittest') === -1 &&
               file.filename.indexOf('test') === -1
      }
    }, next)
  },

  function (next) {
    require('child_process').exec('cp -R overrides/* google', next)
  }
], function (err) {
  if (err) throw err
})
