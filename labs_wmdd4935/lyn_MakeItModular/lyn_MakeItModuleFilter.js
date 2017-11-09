let fs = require('fs');
let path = require('path');
module.exports = function(dir,ext,callback){
    fs.readdir(dir,function(err, dirData) {
      if (err) 
        return callback(err);
      else{    
          let fileList = [];
          for (let i = 0 ; i < dirData.length; i++ ) {
            if(path.extname(dirData[i]) == '.'+ext){
              fileList.push(dirData[i])
              console.log(dirData[i])
            }
          }
          return callback(null, fileList)   
      }
    })
}    