let http = require('http');  
let fs = require('fs');
let server = http.createServer(function (req,resp) {  
   if(req.method == 'POST'){
      let allData = '';
      req.on('data',function(data){
         allData += data.toString().toUpperCase();
      });
      req.on('end',function(){
         resp.end(allData);
         
      });
      
   }
   
})  
server.listen(process.argv[2]);  