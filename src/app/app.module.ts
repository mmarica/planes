import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SocketIoConfig, SocketIoModule} from 'ng6-socket-io';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SocketIoModule.forRoot(config),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
