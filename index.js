const { customAlphabet } = require("nanoid");

// Set sane defaults.
const defaultOptions = {
  alphabet: "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz",
  size: 21,
};

// The function that generates the ID.
let stripenanoid = (prefix, options = defaultOptions) => {
  const nanoid = customAlphabet(options.alphabet, options.size);
  if (!prefix) {
    return nanoid();
  }
  return `${prefix}_${nanoid()}`;
};

module.exports = stripenanoid;
