const { pipeline } = require("stream");
const fileCheck = require("./fcheck");

fileCheck((err) => {
  if (err) {
    process.stderr.write(err);
    process.exit(1);
  }
  const { transformStream } = require("./streams");
  const inputStream = require("./streams").inputStream();
  const outputStream = require("./streams").outputStream();
  pipeline(inputStream, transformStream, outputStream, (err) => {
    if (err) {
      process.stderr.write(`error: ${err}\n`);
      process.exit(1);
    }
  });
});
