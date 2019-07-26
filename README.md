# authors

[![npm version](https://img.shields.io/npm/v/@tanem/authors.svg?style=flat-square)](https://www.npmjs.com/package/@tanem/authors)
[![build status](https://img.shields.io/travis/tanem/authors/master.svg?style=flat-square)](https://travis-ci.org/tanem/authors)
[![coverage status](https://img.shields.io/codecov/c/github/tanem/authors.svg?style=flat-square)](https://codecov.io/gh/tanem/authors)
[![npm downloads](https://img.shields.io/npm/dm/@tanem/authors.svg?style=flat-square)](https://www.npmjs.com/package/@tanem/authors)

> Generates a list of authors in a format suitable for inclusion in an `AUTHORS` file.

## Usage

```
Usage: authors [options]

Generates a list of authors in a format suitable for inclusion in an AUTHORS file.

Options:
  -V, --version   output the version number
  -n, --numbered  sort by number of commits per author
  -h, --help      output usage information

Examples:
  $ authors
  $ authors -n
```

The list of authors is printed to `stdout`, so can be redirected to a file:

```
$ authors > AUTHORS
```

## API

### authors([options])

Returns a `Promise` that will be resolved with a nicely formatted list of authors sorted alphabetically by author name. If an error occurs during execution, the `Promise` is rejected with an `Error` object.

**Arguments**

- `options` - _Optional_ An object containing the optional arguments defined below. Defaults to {}.
  - `isNumbered` - _Optional_ Sort the list by number of commits per author.

**Example**

```ts
// Note: The `fs.promises` API was added in Node.js v10.0.0.
import { promises as fs } from 'fs';
import path from 'path';
import authors from '@tanem/authors';

(async () => {
  try {
    const result = await authors({ isNumbered: true });
    await fs.writeFile(path.join(__dirname, 'AUTHORS'), result, 'utf-8');
  } catch (error) {
    console.error(error);
  }
})();
```

### authors.sync([options])

Synchronously returns a nicely formatted list of authors sorted alphabetically by author name. If an error occurs during execution, an `Error` object will be thrown.

**Arguments**

- `options` - _Optional_ An object containing the optional arguments defined below. Defaults to {}.
  - `isNumbered` - _Optional_ Sort the list by number of commits per author.

**Example**

```ts
import fs from 'fs';
import path from 'path';
import authors from '@tanem/authors';

try {
  const result = authors.sync({ isNumbered: true });
  fs.writeFileSync(path.join(__dirname, 'AUTHORS'), result, 'utf-8');
} catch (error) {
  console.error(error);
}
```

## Installation

```
$ npm install @tanem/authors --save-dev
```

## License

MIT
