'use strict';

var assert = require('assert');
var path = require('path');
var googleProtoFiles = require('../');

function resolve(protoPath) {
  return path.join(__dirname, '../google', protoPath);
}

describe('google-proto-files', function() {
  it('should export appengine', function() {
    assert(googleProtoFiles.appengine);
    assert.equal(
      googleProtoFiles.appengine.v1,
      resolve('appengine/v1/appengine.proto')
    );
  });
  it('should export bigtable', function() {
    assert(googleProtoFiles.bigtable);
    assert.equal(
      googleProtoFiles.bigtable.v1,
      resolve('bigtable/v1/bigtable_service.proto')
    );
    assert.equal(
      googleProtoFiles.bigtable.v2,
      resolve('bigtable/v2/bigtable.proto')
    );
  });
  it('should export bigtable admin', function() {
    assert(googleProtoFiles.bigtable.admin);
    assert.equal(
      googleProtoFiles.bigtable.admin.v1,
      resolve('bigtable/admin/table/v1/bigtable_table_service.proto')
    );
    assert.equal(
      googleProtoFiles.bigtable.admin.v2.instance,
      resolve('bigtable/admin/v2/bigtable_instance_admin.proto')
    );
    assert.equal(
      googleProtoFiles.bigtable.admin.v2.table,
      resolve('bigtable/admin/v2/bigtable_table_admin.proto')
    );
  });
  it('should export cloudtrace', function() {
    assert(googleProtoFiles.cloudtrace);
    assert.equal(
      googleProtoFiles.cloudtrace.v1,
      resolve('devtools/cloudtrace/v1/trace.proto')
    );
  });
  it('should export container', function() {
    assert(googleProtoFiles.container);
    assert.equal(
      googleProtoFiles.container.v1,
      resolve('container/v1/cluster_service.proto')
    );
  });
  it('should export datastore', function() {
    assert(googleProtoFiles.datastore);
    assert.equal(
      googleProtoFiles.datastore.v1,
      resolve('datastore/v1/datastore.proto')
    );
    assert.equal(
      googleProtoFiles.datastore.v1beta3,
      resolve('datastore/v1beta3/datastore.proto')
    );
  });
  it('should export dlp', function() {
    assert(googleProtoFiles.dlp);
    assert.equal(
      googleProtoFiles.dlp.v2beta1,
      resolve('privacy/dlp/v2beta1/dlp.proto')
    );
  });
  it('should export firestore', function() {
    assert(googleProtoFiles.firestore);
    assert.equal(
      googleProtoFiles.firestore.v1beta1,
      resolve('firestore/v1beta1/firestore.proto')
    );
  });
  it('should export firestore admin', function() {
    assert(googleProtoFiles.firestore.admin);
    assert.equal(
      googleProtoFiles.firestore.admin.v1beta1,
      resolve('firestore/admin/v1beta1/firestore_admin.proto')
    );
  });
  it('should export functions', function() {
    assert(googleProtoFiles.functions);
    assert.equal(
      googleProtoFiles.functions.v1beta2,
      resolve('cloud/functions/v1beta2/functions.proto')
    );
  });
  it('should export iam', function() {
    assert(googleProtoFiles.iam);
    assert.equal(googleProtoFiles.iam.v1, resolve('iam/v1/iam_policy.proto'));
  });
  it('should export iam admin', function() {
    assert(googleProtoFiles.iam.admin);
    assert.strictEqual(
      googleProtoFiles.iam.admin.v1,
      resolve('iam/admin/v1/iam.proto')
    );
  });
  it('should export language', function() {
    assert(googleProtoFiles.language);
    assert.equal(
      googleProtoFiles.language.v1beta1,
      resolve('cloud/language/v1beta1/language_service.proto')
    );
    assert.equal(
      googleProtoFiles.language.v1,
      resolve('cloud/language/v1/language_service.proto')
    );
  });
  it('should export logging', function() {
    assert(googleProtoFiles.logging);
    assert.equal(
      googleProtoFiles.logging.v2,
      resolve('logging/v2/logging.proto')
    );
  });
  it('should export monitoring', function() {
    assert(googleProtoFiles.monitoring);
    assert(googleProtoFiles.monitoring.v3);
    assert.equal(
      googleProtoFiles.monitoring.v3.group,
      resolve('monitoring/v3/group_service.proto')
    );
    assert.equal(
      googleProtoFiles.monitoring.v3.metric,
      resolve('monitoring/v3/metric_service.proto')
    );
  });
  it('should export pubsub', function() {
    assert(googleProtoFiles.pubsub);
    assert.equal(googleProtoFiles.pubsub.v1, resolve('pubsub/v1/pubsub.proto'));
    assert.equal(
      googleProtoFiles.pubsub.v1beta2,
      resolve('pubsub/v1beta2/pubsub.proto')
    );
  });
  it('should export spanner', function() {
    assert(googleProtoFiles.spanner);
    assert.equal(
      googleProtoFiles.spanner.v1,
      resolve('spanner/v1/spanner.proto')
    );
    assert.equal(
      googleProtoFiles.spanner.admin.v1.database,
      resolve('spanner/admin/database/v1/spanner_database_admin.proto')
    );
    assert.equal(
      googleProtoFiles.spanner.admin.v1.instance,
      resolve('spanner/admin/instance/v1/spanner_instance_admin.proto')
    );
  });
  it('should export speech', function() {
    assert(googleProtoFiles.speech);
    assert.equal(
      googleProtoFiles.speech.v1beta1,
      resolve('cloud/speech/v1beta1/cloud_speech.proto')
    );
    assert.equal(
      googleProtoFiles.speech.v1,
      resolve('cloud/speech/v1/cloud_speech.proto')
    );
    assert.equal(
      googleProtoFiles.speech.v2,
      resolve('cloud/speech/v2/cloud_speech.proto')
    );
  });
  it('should export storagetransfer', function() {
    assert(googleProtoFiles.storagetransfer);
    assert.equal(
      googleProtoFiles.storagetransfer.v1,
      resolve('storagetransfer/v1/transfer.proto')
    );
  });
  it('should export videointelligence', function() {
    assert(googleProtoFiles.videointelligence);
    assert.equal(
      googleProtoFiles.videointelligence.v1beta1,
      resolve('cloud/videointelligence/v1beta1/video_intelligence.proto')
    );
  });
  it('should export vision', function() {
    assert(googleProtoFiles.vision);
    assert.equal(
      googleProtoFiles.vision.v1,
      resolve('cloud/vision/v1/image_annotator.proto')
    );
  });
});
