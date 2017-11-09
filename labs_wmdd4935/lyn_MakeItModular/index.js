let modules = require("./lyn_MakeItModuleFilter.js");
let dir = process.argv[2];
let ext = process.argv[3];
modules(dir,ext,function(err,dataList){
    if (err) 
        return console.log(err);
});
