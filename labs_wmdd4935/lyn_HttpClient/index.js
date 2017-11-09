let http = require("http");
let url = process.argv[2];
http.get(url,function(resp){
    resp.setEncoding('utf8');
    resp.on('data',function(data){
        console.log(data);
    });
    resp.on('error',function(err){
        console.log(err);
    });
})