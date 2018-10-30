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

    disconnect() {
        console.log('Player disconnected: ', this.socket.id + ' => ' + this.name);
    }
}

module.exports = Player;