let Hapi = require('hapi');
let Inert = require('inert');
let Fs = require("fs");
let Rot = require('rot13-transform');
let server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
server.register(Inert, function (err) {  
  if (err) 
    return console.log(err);
    server.route({  
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
                var thisfile = Fs.createReadStream('file.txt');
                reply(thisfile.pipe(Rot()));
            }
    })
})

server.start(function () {
    console.log('Server running at:', server.info.uri);
});