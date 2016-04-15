'use strict'

var DecompressZip = require('decompress-zip')
var fs = require('fs')
var got = require('got')
var path = require('path')

var throwErr = function (err) { if (err) throw err }

var extract = function (input, opts) {
  var output = Math.random() + '.zip'

  got.stream(input)
    .on('error', throwErr)
    .pipe(fs.createWriteStream(output))
    .on('error', throwErr)
    .on('finish', function () {
      var unzipper = new DecompressZip(output)

      unzipper
        .on('error', throwErr)
        .extract({
          strip: opts.strip,
          filter: function (file) {
            if (opts.filter && !opts.filter(file)) return
            return path.extname(file.filename) === '.proto'
          }
        })
        .on('extract', function () {
          fs.unlink(output, throwErr)
        })
    })
}

extract('https://github.com/google/googleapis/archive/master.zip', { strip: 1 })
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
})
