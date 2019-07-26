#!/usr/bin/env node

import program from 'commander';
import authors from '.';

// Using `require` to work around the issue described here:
// https://github.com/Microsoft/TypeScript/issues/24744.
const { description, version } = require('../package.json');

try {
  program
    .version(version)
    .name('authors')
    .description(description)
    .option('-n, --numbered', 'sort by number of commits per author');

  program.on('--help', () => {
    console.log(`
Examples:
  $ authors
  $ authors -n`);
  });

  program.parse(process.argv);

  const result = authors.sync({ isNumbered: program.numbered });
  process.stdout.write(result);
} catch (error) {
  console.error(error);
  process.exit(1);
}
