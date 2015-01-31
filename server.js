var http = require('http');
var url = require('url');
var fs = require('fs');
var io = require('socket.io');

var server = http.createServer(function(req, res){
    console.log("connecting...");
    var path = url.parse(req.url).pathname;

    switch(path){
        case '/' : 
            break;
        case '/index.html' :
            fs.readFile(__dirname + path, function(err, data){
                if(err){
                    res.writeHead(404);
                    res.write("oops - 404 not found");
                } else {
//                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.write(data);
                }
                res.end();
            });
            break;
    }
});
server.listen(3030);

io.listen(server);
