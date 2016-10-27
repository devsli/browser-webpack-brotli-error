# Overview

Trying to figure out, is it possible to build
[brotli](https://github.com/devongovett/brotli.js) (and then PDFKit) using
webpack with `devtool` set to `eval`.

## Steps to reproduce

```shell
git clone https://github.com/devsli/browser-webpack-brotli-error.git
cd browser-webpack-brotli-error
npm install
npm start
# open http://localhost:3000 in Chrome
```

First problem is in `brotli/dec/bit_reader`:

```js
function BrotliBitReader(input) {
  /* Skipped... */
}

console.log('About to fail');
console.log(BrotliBitReader);
console.log('Not failed');
```

Console output:

```
▶︎ About to fail
▶︎ Uncaught ReferenceError: BrotliBitReader is not defined
    at eval (eval at <anonymous> (http://localhost:3000/app.js:138:1), <anonymous>:33:20)
```

## Workaround

You can rewrite function in different way to fix... well, to _"fix"_ the
ReferenceError:

```js
const BrotliBitReader = function(input) {
  /* Skipped... */
}
```

Console output:

```
▶︎ About to fail
▶︎ function (input) {
    this.buf_ = new Uint8Array(BROTLI_IBUF_SIZE);
    this.input_ = input; /* input callback */

    this.reset();
  }
▶︎ Not failed
```

So you can define every global function and variable as `const` but it's a bad
solution.

## References

* [devtool: 'eval' causes ReferenceError #417](https://github.com/webpack/webpack/issues/417)
* [brotli.js repository](https://github.com/devongovett/brotli.js)
