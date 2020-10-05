const fs = require("fs");
const argv = require("../argv");

const { input, output } = argv;

module.exports = (callback) => {
  try {
    if (input && !output) {
      fs.access(input, fs.constants.R_OK, (err) => {
        if (err) return callback(`error: File ${err.path} doesn't exist\n`);
        callback(null);
      });
    }

    if (output && !input) {
      fs.access(output, fs.constants.W_OK, (err) => {
        if (err) return callback(`error: File ${err.path} doesn't exist\n`);
        callback(null);
      });
    }

    if (output && input) {
      fs.access(input, fs.constants.R_OK, (err) => {
        if (err) return callback(`error: File ${err.path} doesn't exist\n`);
        fs.access(output, fs.constants.W_OK, (err) => {
          if (err) return callback(`error: File ${err.path} doesn't exist\n`);
          callback(null);
        });
      });
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      return callback(`error: File ${err.path} doesn't exist\n`);
    }
    return callback(`error: Access denied to file "${err.path}"\n`);
  }
};
