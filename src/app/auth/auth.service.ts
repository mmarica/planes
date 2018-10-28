import {Injectable, NgZone} from '@angular/core';
import {Socket, SocketIoConfig} from 'ng6-socket-io';

@Injectable()
export class AuthService {
    private config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};
    private socket: Socket;
    private name = '';

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
      this.socket.emit('login', name);
      this.name = name;
    }

    getName() {
        return this.name;
    }
}
