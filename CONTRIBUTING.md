## Adding a new API

If a new API exists on `googleapis`, but is not yet available through `google-proto-files`, there is one decision to make before you proceed. Do you want to add a shortcut to it? A shortcut looks like:

```js
const googleProtoFiles = require('google-proto-files')

// Shortcut:
const datastorev1 = googleProtoFiles.datastore.v1

// Without shortcut:
const datastorev1 = googleProtoFiles('datastore/v1/datastore.proto')
```

### ✔️ Shortcut

- Edit `index.js`, following the convention that exists in the file already.
- Edit `test/index.test.js`, again following the convention that exists in the file already.
- Run the tests:
  ```sh
  $ npm test
  ```
- Commit the changes
- Publish the module:
  ```sh
  $ npm version minor
  $ npm publish
  $ git push origin master --follow-tags
  ```

### ❌ Shortcut

```sh
$ npm version patch
$ npm publish
$ git push origin master --follow-tags
```
