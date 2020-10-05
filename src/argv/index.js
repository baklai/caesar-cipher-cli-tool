const { program } = require("commander");

program
  .storeOptionsAsProperties(true)
  .version("0.1.0", "-v, --version", "output the current version")
  .helpOption("-h, --help", "caesar cipher cli tool information")
  .requiredOption("-s, --shift <number>", "a shift")
  .requiredOption("-a, --action <type>", "an action encode/decode")
  .option("-i, --input [mode]", "an input file")
  .option("-o, --output [mode]", "an output file")
  .parse(process.argv);

const input = program.input;
const output = program.output;

const isBoolean = (value) => typeof value === "boolean";

const requiredParams = (str) => {
  process.stderr.write(`error: Need a file name for '${str}' parameter\n`);
  process.exit(1);
};

if (isBoolean(input)) {
  requiredParams("-i, --input");
}

if (isBoolean(output)) {
  requiredParams("-o, --output");
}

if ((input && input.endsWith("/")) || (output && output.endsWith("/"))) {
  process.stderr.write("error: There must be a path to the file!\n");
  process.exit(1);
}

module.exports = program;
