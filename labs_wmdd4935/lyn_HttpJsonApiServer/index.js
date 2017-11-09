let http = require('http');  
let Url = require('url');
let server = http.createServer( (req,resp) => { 
   let reqUrl = Url.parse(req.url, true);
   let pathName = reqUrl.pathname;
   let isoData = reqUrl.query.iso
   let date = new Date(isoData);
   let respData;
   if(pathName == '/api/parsetime'){
      respData = {
         hour : date.getHours(),
         minute : date.getMinutes(),
         second : date.getSeconds()
      }
   }
   if(pathName == '/api/unixtime'){
      respData = { 
         unixtime :date.getTime()
      }
   }
   if(respData){
      resp.writeHead(200, { 'Content-Type': 'application/json' });
      resp.end(JSON.stringify(respData));
   }
   
   
})  
server.listen(process.argv[2]);  