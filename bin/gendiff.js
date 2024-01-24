#!/usr/bin/env node
/* eslint-disable no-console */
import { program } from 'commander';
import gendiff from '../src/index';

program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>', 'Paths to the configuration files')
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    console.log(gendiff(filepath1, filepath2, program.opts().format));
  });
program.parse();
