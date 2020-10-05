const Caesar = require("caesar-salad").Caesar;

const caesar = (shift, action) => {
  if (isNaN(shift)) {
    process.stderr.write(
      "error: The shift parameter must be of type 'Number'\n",
    );
    process.exit(1);
  } else {
    if (parseInt(shift, 10) < 0) {
      process.stderr.write(
        "error: The shift parameter must be a positive number\n",
      );
      process.exit(1);
    }
  }

  switch (action) {
    case "encode": {
      return Caesar.Cipher(parseInt(shift, 10));
    }
    case "decode": {
      return Caesar.Decipher(parseInt(shift, 10));
    }
    default:
      process.stderr.write(
        "error: Action parameter is required and should be 'encode/decode'\n",
      );
      process.exit(1);
  }
};

module.exports = caesar;
