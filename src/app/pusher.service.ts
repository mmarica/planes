import { Injectable }  from '@angular/core';
import { environment } from '../environments/environment';

declare const Pusher: any;

@Injectable()
export class PusherService {
    pusher: any;
    messagesChannel: any;

    public constructor() {
        this.pusher = new Pusher(environment.pusherKey, {
            authEndpoint: 'http://localhost/auth.php',
        });

        this.messagesChannel = this.pusher.subscribe('private-all-messages');

        this.messagesChannel.bind('client-new-message', (message) => {
            // ...
        });

    }
}
