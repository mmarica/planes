import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
    private name = '';

    constructor() {
        const storageName = localStorage.getItem('name');

        if (storageName !== null) {
            this.name = storageName;
        } else {
            this.name = 'user_' + Math.floor(Math.random() * 1000);
        }
    }

    getName() {
        return this.name;
    }
}
