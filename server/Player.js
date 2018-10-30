class Player {
    constructor(socket) {
        this.socket = socket;
        this.name = '';
        console.log('Player connected, socket id: ' + socket.id);
    }

    setName(name) {
        console.log('Login: ' + this.socket.id + ' => ' + name);
        this.name = name;
    }

    broadcastPlayerConnected() {
        this.socket.broadcast.emit('player connected', {
            socketId: this.socket.id,
            name: this.name,
        });
    }

    sendPlayerList(list) {
        this.socket.emit('player list', list);
        console.log('Sending player list to : ' + this.socket.id + ' => ' + this.name, list);
    }

    disconnect() {
        console.log('Player disconnected: ', this.socket.id + ' => ' + this.name);
        // notify other players that this one has disconnected
        this.socket.broadcast.emit('player disconnected', this.socket.id);
    }

    getName() {
        return this.name;
    }

    getSocketId() {
        return this.socket.id;
    }

}

module.exports = Player;