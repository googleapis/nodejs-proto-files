'use strict'

var path = require('path')

var googleProtoFiles = module.exports = function () {
  var args = [].slice.call(arguments)
  return path.join.apply(null, [__dirname, 'google'].concat(args))
}

module.exports.appengine = {
  v1: googleProtoFiles('appengine/v1/appengine.proto')
}

module.exports.bigtable = {
  v1: googleProtoFiles('bigtable/v1/bigtable_service.proto'),
  v2: googleProtoFiles('bigtable/v2/bigtable.proto')
}

module.exports.bigtable.admin = {
  v1: googleProtoFiles('bigtable/admin/table/v1/bigtable_table_service.proto'),
  v2: {
    instance: googleProtoFiles('bigtable/admin/v2/bigtable_instance_admin.proto'),
    table: googleProtoFiles('bigtable/admin/v2/bigtable_table_admin.proto')
  }
}

module.exports.cloudtrace = {
  v1: googleProtoFiles('devtools/cloudtrace/v1/trace.proto')
}

module.exports.container = {
  v1: googleProtoFiles('container/v1/cluster_service.proto')
}

module.exports.datastore = {
  v1: googleProtoFiles('datastore/v1/datastore.proto'),
  v1beta3: googleProtoFiles('datastore/v1beta3/datastore.proto')
}

module.exports.dlp = {
  v2beta1: googleProtoFiles('privacy/dlp/v2beta1/dlp.proto')
}

module.exports.functions = {
  v1beta2: googleProtoFiles('cloud/functions/v1beta2/functions.proto')
}

module.exports.iam = {
  v1: googleProtoFiles('iam/v1/iam_policy.proto')
}

module.exports.iam.admin = {
  v1: googleProtoFiles('iam/admin/v1/iam.proto')
}

module.exports.language = {
  v1beta1: googleProtoFiles('cloud/language/v1beta1/language_service.proto'),
  v1: googleProtoFiles('cloud/language/v1/language_service.proto')
}

module.exports.logging = {
  v2: googleProtoFiles('logging/v2/logging.proto')
}

module.exports.monitoring = {
  v3: {
    group: googleProtoFiles('monitoring/v3/group_service.proto'),
    metric: googleProtoFiles('monitoring/v3/metric_service.proto')
  }
}

module.exports.pubsub = {
  v1: googleProtoFiles('pubsub/v1/pubsub.proto'),
  v1beta2: googleProtoFiles('pubsub/v1beta2/pubsub.proto')
}

module.exports.spanner = {
  v1: googleProtoFiles('spanner/v1/spanner.proto')
}

module.exports.spanner.admin = {
  v1: {
    database: googleProtoFiles('spanner/admin/database/v1/spanner_database_admin.proto'),
    instance: googleProtoFiles('spanner/admin/instance/v1/spanner_instance_admin.proto')
  }
}

module.exports.speech = {
  v1beta1: googleProtoFiles('cloud/speech/v1beta1/cloud_speech.proto'),
  v1: googleProtoFiles('cloud/speech/v1/cloud_speech.proto'),
  v2: googleProtoFiles('cloud/speech/v2/cloud_speech.proto')
}

module.exports.storagetransfer = {
  v1: googleProtoFiles('storagetransfer/v1/transfer.proto')
}

module.exports.videointelligence = {
  v1beta1: googleProtoFiles('cloud/videointelligence/v1beta1/video_intelligence.proto')
}

module.exports.vision = {
  v1: googleProtoFiles('cloud/vision/v1/image_annotator.proto')
}
