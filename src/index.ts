/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

import * as path from 'path';
import * as loader from './load';

function googleProtoFiles(...paths: string[]): string {
  return path.join(__dirname, '../../', 'google', ...paths);
}

export const load = loader.load;
export const loadSync = loader.loadSync;
export const appengine = {
  v1: googleProtoFiles('appengine/v1/appengine.proto'),
};

export const bigtable = {
  v1: googleProtoFiles('bigtable/v1/bigtable_service.proto'),
  v2: googleProtoFiles('bigtable/v2/bigtable.proto'),
  admin: {
    v1: googleProtoFiles(
        'bigtable/admin/table/v1/bigtable_table_service.proto'),
    v2: {
      instance:
          googleProtoFiles('bigtable/admin/v2/bigtable_instance_admin.proto'),
      table: googleProtoFiles('bigtable/admin/v2/bigtable_table_admin.proto'),
    },
  }
};

export const cloudtrace = {
  v1: googleProtoFiles('devtools/cloudtrace/v1/trace.proto'),
};

export const container = {
  v1: googleProtoFiles('container/v1/cluster_service.proto'),
};

export const datastore = {
  v1: googleProtoFiles('datastore/v1/datastore.proto'),
  v1beta3: googleProtoFiles('datastore/v1beta3/datastore.proto'),
};

export const dlp = {
  v2beta1: googleProtoFiles('privacy/dlp/v2beta1/dlp.proto'),
};

export const embeddedAssistant = {
  v1alpha1:
      googleProtoFiles('assistant/embedded/v1alpha1/embedded_assistant.proto'),
  v1alpha2:
      googleProtoFiles('assistant/embedded/v1alpha2/embedded_assistant.proto'),
};

export const firestore = {
  v1beta1: googleProtoFiles('firestore/v1beta1/firestore.proto'),
  admin: {
    v1beta1: googleProtoFiles('firestore/admin/v1beta1/firestore_admin.proto'),
  }
};

export const functions = {
  v1beta2: googleProtoFiles('cloud/functions/v1beta2/functions.proto'),
};

export const iam = {
  v1: googleProtoFiles('iam/v1/iam_policy.proto'),
  admin: {
    v1: googleProtoFiles('iam/admin/v1/iam.proto'),
  }
};

export const language = {
  v1beta1: googleProtoFiles('cloud/language/v1beta1/language_service.proto'),
  v1: googleProtoFiles('cloud/language/v1/language_service.proto'),
};

export const logging = {
  v2: googleProtoFiles('logging/v2/logging.proto'),
};

export const monitoring = {
  v3: {
    group: googleProtoFiles('monitoring/v3/group_service.proto'),
    metric: googleProtoFiles('monitoring/v3/metric_service.proto'),
  },
};

export const pubsub = {
  v1: googleProtoFiles('pubsub/v1/pubsub.proto'),
  v1beta2: googleProtoFiles('pubsub/v1beta2/pubsub.proto'),
};

export const spanner = {
  v1: googleProtoFiles('spanner/v1/spanner.proto'),
  admin: {
    v1: {
      database: googleProtoFiles(
          'spanner/admin/database/v1/spanner_database_admin.proto'),
      instance: googleProtoFiles(
          'spanner/admin/instance/v1/spanner_instance_admin.proto'),
    },
  }
};

export const speech = {
  v1beta1: googleProtoFiles('cloud/speech/v1beta1/cloud_speech.proto'),
  v1: googleProtoFiles('cloud/speech/v1/cloud_speech.proto'),
  v2: googleProtoFiles('cloud/speech/v2/cloud_speech.proto'),
};

export const storagetransfer = {
  v1: googleProtoFiles('storagetransfer/v1/transfer.proto'),
};

export const videointelligence = {
  v1beta1: googleProtoFiles(
      'cloud/videointelligence/v1beta1/video_intelligence.proto'),
};

export const vision = {
  v1: googleProtoFiles('cloud/vision/v1/image_annotator.proto'),
};
