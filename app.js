var clc = require('cli-color');

console.log(clc.green("Mensagem verde:"));
console.log(clc.red.bgWhite.underline("Underlined red text on white background."));
console.log(clc.red.bold("Error"));
console.log(clc.yellow("Warning"));
console.log(clc.blue("Sucess"));

// https://www.npmjs.com/package/cli-color