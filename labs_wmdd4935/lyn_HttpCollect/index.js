let http = require("http");
let url = process.argv[2];
let str = '';
http.get(url,function(resp){
    resp.setEncoding('utf8');
    resp.on('data',function(data){
        str += data;
    });
    resp.on('error',function(err){
        console.log(err);
    });
    resp.on('end',function(){
        console.log(str.length);
        console.log(str);
    });
})