let net = require('net');  
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let dt = date.getDate() < 10 ? '0'+date.getDate():date.getDate();
let hours = date.getHours() < 10 ? '0'+date.getHours():date.getHours();
let mins = date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes();
let wirteDate = year + "-" + month  + "-" + dt + " " + hours + ":" + mins ;
let server = net.createServer(function (socket) {  
    socket.write(wirteDate);
    socket.end("\n");
})  
server.listen(process.argv[2])  