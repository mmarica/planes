import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player.service';

@Component({
    selector: 'app-lobby',
    templateUrl: './lobby.component.html',
    styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
    name = '';

    constructor(
        private playerService: PlayerService,
    ) {
        this.name = this.playerService.getName();
    }

    ngOnInit() {
    }

    get playerList() {
        return this.playerService.getPlayerList();
    }
}
