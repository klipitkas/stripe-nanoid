# Stripe NanoID

A tiny, secure, unique ID generator for IDs that look similar to Stripe's.

### INSTALL

To install the package:

```bash
npm install --save stripe-nanoid
```

### USAGE

A usage example is below:

```js
const stripenanoid = require("stripe-nanoid");
```

```js
stripenanoid("cus"); //=> "cus_rPaZmctZlfLGHdZHiljZY"
```

### OPTIONS

A usage example with options is below:

```js
const options = {
  alphabet: "abcDEF",
  size: 4,
};
```

Then you can use them:

```js
stripenanoid("cus", options)); //=> "cus_cFEa"
```
