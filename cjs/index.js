const Compiler = require('htl-compiler');

new Compiler("<div>${message}</div>", { message: "Hello, World!" }).compile().then(result => console.log(result));
