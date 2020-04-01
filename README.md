[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google APIs Proto Files: Node.js Client](https://github.com/googleapis/nodejs-proto-files)

[![release level](https://img.shields.io/badge/release%20level-general%20availability%20%28GA%29-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/google-proto-files.svg)](https://www.npmjs.org/package/google-proto-files)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-proto-files/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-proto-files)




All of the Google API's protocol buffer files


* [Google APIs Proto Files Node.js Client API Reference][client-docs]

* [github.com/googleapis/nodejs-proto-files](https://github.com/googleapis/nodejs-proto-files)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)

  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Installing the client library

```bash
npm install google-proto-files
```


### Using the client library

```javascript
const protos = require('google-proto-files');

async function quickstart() {
  // Get a directory path by executing as a function
  const files = protos.getProtoPath('logging', 'v2');
  console.log(files);
  // node_modules/google-proto-files/google/logging/v2

  // Get a path to the entry proto file for a specific API version
  console.log(protos.pubsub.v1);
  // node_modules/google-proto-files/google/pubsub/v1/pubsub.proto

  // Load a proto which depends on google common protos.
  const root1 = await protos.load('./cloudcats.proto');
  const service1 = root1.lookup('example.MyService');
  console.log(service1);

  // Load protos synchronously
  const root2 = protos.loadSync('./cloudcats.proto');
  const service2 = root2.lookup('example.MyService');
  console.log(service2);
}
quickstart();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-proto-files/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-proto-files/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-proto-files&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Google APIs Proto Files Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.





More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-proto-files/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its template in this
[directory](https://github.com/googleapis/synthtool/tree/master/synthtool/gcp/templates/node_library).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-proto-files/blob/master/LICENSE)

[client-docs]: https://googleapis.dev/nodejs/nodejs-proto-files/latest

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing

[auth]: https://cloud.google.com/docs/authentication/getting-started
