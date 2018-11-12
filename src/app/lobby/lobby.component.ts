import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player.service';
import {PlayerModel} from '../player.model';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  name = '';
  playerList: PlayerModel[];

  constructor(
    public playerService: PlayerService,
  ) {
    this.name = this.playerService.getName();
    this.playerService.observePlayerList().subscribe((list) => {
      this.playerList =  Object.assign([], list);
    });
  }

  ngOnInit() {
  }
}
