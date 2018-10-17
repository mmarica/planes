import { Injectable }  from '@angular/core';
import { environment } from '../environments/environment';

declare const Pusher: any;

@Injectable()
export class PusherService {
    pusher: any;
    messagesChannel: any;

    public constructor() {
        this.pusher = new Pusher(environment.pusherKey, {
            cluster: 'eu',
            authEndpoint: 'http://localhost:8000/auth.php',
        });

        this.messagesChannel = this.pusher.subscribe('presence-mma');

        this.messagesChannel.bind('client-new-message', (message) => {
            // ...
        });

    }
}
