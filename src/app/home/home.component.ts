import {Component, OnInit} from '@angular/core';
import {Socket} from 'ng6-socket-io';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private socket: Socket) {
        this.socket.emit('message', 'connected');
    }

    ngOnInit() {
    }
}
