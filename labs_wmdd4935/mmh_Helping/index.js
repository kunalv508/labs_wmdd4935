let Hapi = require('hapi');
let Vision = require('vision');
let Handlebar = require('handlebars');
let server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
server.register(Vision, (err) => {

    if (err) 
     return console.log(err);

    server.views({
        engines: {
            html: Handlebar
        },
        relativeTo: __dirname,
        path: 'templates',
        helpersPath: './templates/helper'
        
    });
    server.route({
        method: 'GET',
        path: '/',
        handler : function(req,rep){
          rep.view('helpingIndex',{name : req.query.name,suffix : req.query.suffix});
          
        }
    });
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});