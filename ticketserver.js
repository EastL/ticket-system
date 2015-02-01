var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/', express.static(__dirname));
/*
app.get('/', function(req, res){
  res.sendfile('ticket.html');
});
*/


http.listen(3000, function(){
  console.log('listening on *:3000');
});


io.emit('some event', { for: 'everyone' });
io.on('connection', function(socket){
  socket.broadcast.emit('hi');
});
io.on('connection', function(socket){
  socket.on('save order', function(msg){
    console.log('save order : '+msg);
    io.emit('save order', msg);
  });
});
