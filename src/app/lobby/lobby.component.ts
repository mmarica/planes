import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  name = '';

  constructor(
    private authService: AuthService,
  ) {
    this.name = this.authService.getName();
  }

  ngOnInit() {
  }

}
