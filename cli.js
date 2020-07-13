#!/usr/bin/env node

const mdLinks = require('./index');
const program = require('commander');
const chalk = require('chalk');
const package = require("./package.json");
const path = process.argv[2];
program.version(package.version);
program
  .description(chalk.cyan('Fetch and validate markdown links in files or directories.'))
  .option('-vl, --validate [true]', 'Returns validated links')
  .option('-st, --stats [true]', 'Returns link stats')
const options = {
  validate: program.validate,
  stats: program.stats
};

mdLinks(path, {
    validate: program.validate,
    stats: program.stats
  })
  .then((response) => {
    if (options.validate) {
      response.forEach((item) => {
        console.log(
          `\nFile: ${chalk.bold(item.file)} \nURL: ${chalk.cyan(
            item.href
          )} \nText: ${chalk.bold(item.text)} \nValidate: ${chalk.cyan(
            item.validate
          )}`
        );
      });
    } else if (options.stats) {
      const links = response.map((i) => i.href);
      const uniqueLinks = new Set(links);
      const brokenLinks = response.filter((i) => i.validate !== '200 OK');
      console.log(
        chalk.bold(
          `\nTotal links: ${chalk.cyan(
            response.length
          )}\nUnique links: ${chalk.cyan(
            uniqueLinks.size
          )}\nBroken links: ${chalk.cyan(brokenLinks.length)}
          `
        )
      );
    } else {
      response.forEach((item) => {
        console.log(
          `\nFile: ${chalk.bold(item.file)} \nURL: ${chalk.cyan(
            item.href
          )} \nText: ${chalk.bold(item.text)}`
        );
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });

program.parse(process.argv);
