import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SocketIoConfig, SocketIoModule} from 'ng6-socket-io';
import {AuthService} from './auth/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SocketIoModule,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
