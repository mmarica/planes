var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});

var PlayerList = require('./PlayerList');
var playerList = new PlayerList();

io.on('connection', function(socket) {
    playerList.add(socket);

    socket.on('disconnect', function() {
        playerList.remove(socket.id);
    });

    socket.on('login', function(name) {
        playerList.login(socket.id, name);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
