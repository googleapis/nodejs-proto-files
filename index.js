'use strict'

var path = require('path')

var googleProtoFiles = module.exports = function () {
  var args = [].slice.call(arguments)
  return path.join.apply(null, [__dirname, 'google'].concat(args))
}

module.exports.bigtable = {
  admin: googleProtoFiles('bigtable/admin/table/v1/bigtable_table_service.proto'),
  v1: googleProtoFiles('bigtable/v1/bigtable_service.proto')
}

module.exports.cloudtrace = {
  v1: googleProtoFiles('devtools/cloudtrace/v1/trace.proto')
}

module.exports.container = {
  v1: googleProtoFiles('container/v1/cluster_service.proto')
}

module.exports.datastore = {
  v1beta3: googleProtoFiles('datastore/v1beta3/datastore.proto')
}

module.exports.iam = {
  v1: googleProtoFiles('iam/v1/iam_policy.proto')
}

module.exports.logging = {
  v2: googleProtoFiles('logging/v2/logging.proto')
}

module.exports.pubsub = {
  v1: googleProtoFiles('pubsub/v1/pubsub.proto'),
  v1beta2: googleProtoFiles('pubsub/v1beta2/pubsub.proto')
}