import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  name = '';
  playerList = [];

  constructor(
    public playerService: PlayerService,
  ) {
    this.name = this.playerService.getName();
    this.playerService.playerList$.subscribe((list) => {
      this.playerList = list;
      console.log("Data Values",this.playerList);
    });
  }

  ngOnInit() {
  }
}
