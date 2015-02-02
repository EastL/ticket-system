var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var fs = require('fs');
var bodyParser = require("body-parser"); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(__dirname+'/public'));


app.use('/', express.static(__dirname));

/*
app.get('/', function(req, res){
  res.sendfile('ticket.html');
});
*/

var isend;
function ajaxerror(res)
{
	if(!isend)
	{
	res.writeHead(500, {'Content-Type': 'text/plain'});
	res.end('error');
}}

app.post('/signup', function(req, res)
{

	var user = req.body.user;
	var password = req.body.password;
	var mode = req.body.ttype;
	var obj;
	isend = false;
console.log(mode +',' +user+","+password);
	fs.exists('./json/log.json',function(exists){
		if(exists)fs.readFile('./json/log.json', function(err, datas)
		{
			console.log(datas.toString());
			obj = JSON.parse((datas.toString()));
			if(mode == 'login')
			{
				if(obj[user] == password)
				{
					isend=true;
					res.writeHead(200, {'Content-Type': 'text/plain'});
					res.end('success');
				}
				else ajaxerror(res);
			}
			else if(obj[user] == null)
			{
				console.log('Account Not Exist : ');
				console.log("User : "+user);
				console.log("PWD : "+password);
				obj[user] = password;
				fs.writeFile('./json/log.json', JSON.stringify(obj), function(err)
				{
					if(err){console.log(err); ajaxerror(res);}
					else
					{
						res.writeHead(200, {'Content-Type': 'text/plain'});
						res.end('success');
						isend=true;
						console.log('save new account : '+user+',success');
					}
				});
			}
			else ajaxerror(res);
			if(err) {console.log("errorr =" + err);}
		});
	});
});




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
