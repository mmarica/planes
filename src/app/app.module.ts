import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SocketIoModule} from 'ng6-socket-io';
import {AuthService} from './auth/auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import {AppMaterialModule} from './app-material.module';
import {LobbyComponent} from './lobby/lobby.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LobbyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    SocketIoModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
