#!/usr/bin/env node
import { program } from 'commander';
program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference')
  .version('1.0.0', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')

  .parse(process.argv); 

if (!process.argv.slice(2).length) {
  program.outputHelp();
}