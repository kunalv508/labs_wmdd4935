let fs = require('fs');
let path = require('path');

fs.readdir(process.argv[2], readdir);

function readdir(err, dirData) {
  if (err) 
    return console.error(err);
  for (let i = 0 ; i < dirData.length; i++ ) {
    if(path.extname(dirData[i]) == '.'+process.argv[3])
      console.log(dirData[i])
  }
  
}