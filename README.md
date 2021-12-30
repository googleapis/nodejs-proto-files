[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google APIs Proto Files: Node.js Client](https://github.com/googleapis/nodejs-proto-files)


[![npm version](https://img.shields.io/npm/v/google-proto-files.svg)](https://www.npmjs.org/package/google-proto-files)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-proto-files/main.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-proto-files)




All of the Google API's protocol buffer files


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-proto-files/blob/main/CHANGELOG.md).

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

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-proto-files/tree/main/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-proto-files/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-proto-files&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Google APIs Proto Files Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* `legacy-8`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).








More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-proto-files/blob/main/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-proto-files/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/google-proto-files/latest

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing

[auth]: https://cloud.google.com/docs/authentication/getting-started
