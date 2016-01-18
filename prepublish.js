'use strict'

var DecompressZip = require('decompress-zip')
var fs = require('fs')
var got = require('got')
var path = require('path')

var input = 'https://github.com/google/googleapis/archive/master.zip'
var output = './googleapis.zip'

var throwErr = function (err) { if (err) throw err }

got.stream(input)
  .on('error', throwErr)
  .pipe(fs.createWriteStream('./googleapis.zip'))
  .on('error', throwErr)
  .on('finish', function () {
    var unzipper = new DecompressZip(output)

    unzipper
      .on('error', throwErr)
      .extract({
        strip: 1,
        filter: function (file) {
          return path.extname(file.filename) === '.proto'
        }
      })
  })
