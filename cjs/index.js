const Compiler = require('htl-compiler');

console.log(
  new Compiler("<div>${message}</div>", { message: "Hello, World!" }).compileSync()
);
