import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, IonicPageModule} from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FeedComponent} from "../components/feed/feed.component";
import {FuncionalidadeIconeComponent} from "../components/func-icone/func-icone.component";
import {PersistenciaService} from "../infra/persistencia/persistencia.service";
import {LoginPage} from "../pages/login/login";
import {CalendarioPage} from "../pages/calendario/calendario";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FeedComponent,
    FuncionalidadeIconeComponent,
    LoginPage,
    CalendarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(HomePage),
    IonicPageModule.forChild(CalendarioPage)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FeedComponent,
    FuncionalidadeIconeComponent,
    LoginPage,
    CalendarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PersistenciaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
