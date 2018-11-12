import {Injectable, NgZone} from '@angular/core';
import {Socket, SocketIoConfig} from 'ng6-socket-io';
import {BehaviorSubject} from 'rxjs';
import {PlayerModel} from './player.model';

@Injectable()
export class PlayerService {
    private config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};
    private socket: Socket;
    private name = '';
    private playerList: PlayerModel[] = [];
    private playerListSubject = new BehaviorSubject<PlayerModel[]>([]);

    constructor(
        private zone: NgZone,
    ) {
    }

    login(name) {
        this.socket = new Socket(this.config, this.zone);

        this.socket.on('player list', (list) => this.onPlayerList(list));

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

    observePlayerList() {
      return this.playerListSubject.asObservable();
    }

    onPlayerList(dictionary) {
      const list = [];

      Object.keys(dictionary).forEach(function(socketId) {
        const player = new PlayerModel();
        player.name = dictionary[socketId];
        player.socketId = socketId;
        list.push(player);
      });

      this.sortPlayerList(list);
      this.playerList = list;

      this.playerListSubject.next(list);
      console.log('onPlayerList', list);
    }

    private sortPlayerList(list) {
      list.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }

        return 0;
      });
    }
}
