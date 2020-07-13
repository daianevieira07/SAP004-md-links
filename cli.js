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
  .then((res) => {
    if (options.validate) {
      res.forEach((item) => {
        console.log(
          `\nFile: ${chalk.bold(item.file)} \nURL: ${chalk.cyan(
            item.href
          )} \nText: ${chalk.bold(item.text)} \nValidate: ${chalk.cyan(
            item.validate
          )}`
        );
      });
    } else if (options.stats) {
      const links = res.map((i) => i.href);
      const uniqueLinks = new Set(links);
      const brokenLinks = res.filter((i) => i.validate !== '200 OK');
      console.log(
        chalk.bold(
          `\nTotal links: ${chalk.cyan(
            res.length
          )}\nUnique links: ${chalk.cyan(
            uniqueLinks.size
          )}\nBroken links: ${chalk.cyan(brokenLinks.length)}
          `
        )
      );
    } else {
      res.forEach((item) => {
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
