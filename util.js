'use strict'

var fs = require('fs')
var path = require('path')

module.exports.findIncludePath = function (originPath, includePath) {
  var current = originPath
  var found = fs.existsSync(path.join(current, includePath))
  while (!found && current.length > 0) {
    current = current.substring(0, current.lastIndexOf('/'))
    found = fs.existsSync(path.join(current, includePath))
  }
  if (!found) {
    throw new Error('The include `' + includePath + '` was not found.')
  }
  return path.join(current, includePath)
}
