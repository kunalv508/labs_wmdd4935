let fs = require('fs');
fs.readFile(process.argv[2], readfile);

function readfile(err, fileData) {
  if (err) return console.error(err);
  let toStrng = fileData.toString();
  let strSplit = toStrng.split('\n');
  let newLineLen = strSplit.length-1;
  console.log(newLineLen);
}