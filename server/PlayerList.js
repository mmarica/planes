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
    let player = this.players[socketId];
    player.setName(name);

    // only now the player is considered as connected, send him the list of other players
    player.sendPlayerList(this.getList(socketId));
    player.broadcastPlayerConnected();

    // console.log('Player list now:');
    // console.log(this.players);
  }

  remove(socketId) {
    this.players[socketId].disconnect();
    delete this.players[socketId];
    // console.log('Player list now:');
    // console.log(this.players);
  }

  getList(socketIdToSkip) {
    // @TODO MMA: remove temp hack
    return {
      x1: 'Gogelu',
      x2: 'Doorel',
      x3: 'Purcel',
    };

    let list = {};

    for (var socketId in this.players) {
      // skip current player
      if (socketId == socketIdToSkip) {
        continue;
      }

      if (this.players.hasOwnProperty(socketId)) {
        let player = this.players[socketId];
        let name = player.getName();

        // user has not logged-in (yet?), don't show
        if (name == '') {
          continue;
        }

        list[player.getSocketId()] = name;
      }
    }

    return list;
  }
}

module.exports = PlayerList;
