var Player = require('./Player');

class PlayerList {
    constructor() {
        this.players = {};
    }

    add(socket) {
        this.players[socket.id] = new Player(socket);
        // console.log('Player list now:');
        // console.log(this.players);
    }

    login(socketId, name) {
        this.players[socketId].setName(name);
        // console.log('Player list now:');
        // console.log(this.players);
    }

    remove(socketId) {
        this.players[socketId].disconnect();
        delete this.players[socketId];
        // console.log('Player list now:');
        // console.log(this.players);
    }
}

module.exports = PlayerList;