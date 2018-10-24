import {Component, NgZone, OnInit} from '@angular/core';
import {Socket, SocketIoConfig} from 'ng6-socket-io';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};
    private socket: Socket;

    constructor(zone: NgZone) {
        this.socket =  new Socket(this.config, zone);

        console.log(this.socket);
    }

    ngOnInit() {
        this.socket.emit('message', 'connected');
    }
}
