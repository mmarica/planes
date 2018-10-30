import {Injectable, NgZone} from '@angular/core';
import {Socket, SocketIoConfig} from 'ng6-socket-io';

@Injectable()
export class PlayerService {
    private config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};
    private socket: Socket;
    private name = '';
    private playerList = {};

    constructor(
        private zone: NgZone,
    ) {
        // const storageName = localStorage.getItem('name');
        //
        // if (storageName !== null) {
        //     this.name = storageName;
        // } else {
        //     this.name = 'user_' + Math.floor(Math.random() * 1000);
        // }
    }

    login(name) {
        this.socket = new Socket(this.config, this.zone);

        this.socket.on('player list', (list) => {
            this.playerList = list;
        });

        this.socket.on('player connected', (player) => {
            console.log('Player connected: ', player);
            this.playerList[player.socketId] = player.name;
        });

        this.socket.on('player disconnected', (socketId) => {
            console.log('Player disconnected: ', socketId);
            delete this.playerList[socketId];
        });

        this.socket.emit('login', name);
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getPlayerList() {
        return this.playerList;
    }
}
