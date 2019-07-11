# HTL Compiler Testing

This repo is designed to test out using [htl-compiler](https://github.com/megazear7/htl-compiler) as a
 - [ESM module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) for use with modern browsers or in build pipelines.
 - [UMD module](https://github.com/umdjs/umd) for use with browser backwards compatibility.
 - [CJS module](https://nodejs.org/docs/latest/api/modules.html) for use with [Node.JS](https://nodejs.org/en/).

To test each setup run one of the below commands. To see how it is working look at the `esm`, `umd`, and `cjs` directories. For the ESM and UMD tests you will want to open [localhost:3000](http://localhost:3000) after running the command.

Note: The ESM test does not currently work as the htl-compiler does not export an ESM module.

```bash
npm run test:esm
npm run test:umd
npm run test:cjs
```
