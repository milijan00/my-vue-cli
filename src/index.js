#! /usr/bin/env node
const yargs = require("yargs");
const cliManager = require("./cliManager");
const VueCreator = require("./vueCreator");
yargs
.scriptName("mvc")
.usage("$0 <cmd> [args]")
.option("c", {alias: "commands", demandOption : false, describe: "Show the list of all commands."})
.help()
.argv;

const cli = new cliManager(yargs.argv, new VueCreator());
cli.manageCommands();