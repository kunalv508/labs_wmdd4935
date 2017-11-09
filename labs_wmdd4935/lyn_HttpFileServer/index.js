let http = require('http');  
let fs = require('fs');
let server = http.createServer(function (req,resp) {  
   let fileName = process.argv[3];
   let file = fs.createReadStream(fileName);
   file.on('open', function () {
        file.pipe(resp);
   });
   
})  
server.listen(process.argv[2]);  