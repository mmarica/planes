import { Component, OnInit } from '@angular/core';
import { PusherService }     from './pusher.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public constructor(
        private pusher: PusherService
    ) {
    }

    ngOnInit(): void {

    }
}
