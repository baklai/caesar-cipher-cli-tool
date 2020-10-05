const fs = require("fs");
const path = require("path");

const { Transform } = require("stream");

const argv = require("../argv");
const caesar = require("../coder");

const coder = caesar(argv.shift, argv.action);
const { input, output, action } = argv;

const transformStream = new Transform({
  transform(chunk, _, callback) {
    callback(null, coder.crypt(chunk.toString()));
  },
});

const inputStream = () => {
  if (input) {
    const rs = fs.createReadStream(input);
    if (input && !output) {
      process.stdout.write(`\nFile "${input}" successfully ${action}:\n\n`);
    }
    rs.on("end", () => {
      process.stdout.write("\n");
    });
    return rs;
  }
  process.stdout.write(
    "Info: For exit press 'Ctrl + c" +
      "\n\nPrint some text for encode/decode:\n" +
      "Input text : ",
  );

  process.stdin.on("data", (data) => {
    if (output) {
      process.stdout.write(`Successfully written to "${output}"\n`);
    } else {
      process.stdout.write("Output text : ", data);
    }
    setImmediate(() => {
      process.stdout.write("\nInput text : ");
    });
  });
  return process.stdin;
};

const outputStream = () => {
  if (output) {
    const ws = fs.createWriteStream(path.resolve(output), {
      flags: "a",
    });
    ws.on("finish", () => {
      process.stdout.write(
        `Successfully <${action}> from "${input}" to "${output}"\n`,
      );
    });
    return ws;
  }
  return process.stdout;
};

module.exports = {
  transformStream,
  inputStream,
  outputStream,
};
