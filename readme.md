# google-proto-files [![Build Status][build_img]][build_link]

> Get a copy of the [googleapis](https://github.com/google/googleapis) proto files into your project

```sh
$ npm install --save google-proto-files
```
```js
var protoFiles = require('google-proto-files')
```

### Get a directory path by executing as a function
```js
protoFiles('logging', 'v2')
// node_modules/google-proto-files/google/logging/v2
```

### Get a path to the entry proto file for a specific API version
```js
protoFiles.pubsub.v1
// node_modules/google-proto-files/google/pubsub/v1/pubsub.proto
```

### Load a proto which depends on google common protos.
#### Asynchronously
```js
protoFiles.load('path/to/file.proto').then(function(root) {
  var MyService = root.lookup('example.MyService')
})
```

#### Synchronously
```js
var root = protoFiles.loadSync('path/to/file.proto');
var MyService = root.lookup('example.MyService');
```

[build_img]: https://travis-ci.org/googleapis/nodejs-proto-files.svg?branch=master
[build_link]: https://travis-ci.org/googleapis/nodejs-proto-files
