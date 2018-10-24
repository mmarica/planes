import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SocketIoConfig, SocketIoModule} from 'ng6-socket-io';

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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
