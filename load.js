var read = require('fs-readdir-recursive')
var path = require('path')
var protobuf = require('protobufjs')

var COMMON_PROTO_DIRS = [
  // This list of directories is defined here:
  // https://github.com/googleapis/googleapis/blob/master/gapic/packaging/common_protos.yaml
  'api',
  path.join('logging', 'type'),
  'longrunning',
  'protobuf', // This is an additional path that the common protos depend on.
  'rpc',
  'type'
]

var COMMON_PROTO_FILES = COMMON_PROTO_DIRS.map(function (dir) {
  return path.join('google', dir)
}).map(function (dir) {
  return read(dir).map(function (filename) {
    return path.join(dir, filename)
  })
}).reduce(function (accum, arr) {
  return accum.concat(arr)
}, []).filter(function (filename) {
  return filename.endsWith('.proto')
})

class GoogleProtoFilesRoot extends protobuf.Root {
  constructor () {
    super([].slice.apply(arguments))
  }

  // Causes the loading of an included proto to check if it is a common
  // proto. If it is a common proto, use the google-proto-files proto.
  resolvePath (_, includePath) {
    // Fully qualified paths don't need to be resolved.
    if (includePath.startsWith('/')) {
      return includePath
    }

    if (COMMON_PROTO_FILES.includes(includePath)) {
      return path.join(__dirname, includePath)
    }
    return protobuf.util.path.resolve.apply(null, [].slice.call(arguments))
  }
}

module.exports.loadSync = function (filename) {
  return protobuf.loadSync(filename, new GoogleProtoFilesRoot())
}

module.exports.load = function (filename, callback) {
  return protobuf.load(filename, new GoogleProtoFilesRoot())
}

