let fs = require("fs");
let allData = fs.readFileSync(process.argv[2]);
let str = allData.toString();
let strSplit = str.split('\n');
let newLineLen = strSplit.length-1;
console.log(newLineLen);