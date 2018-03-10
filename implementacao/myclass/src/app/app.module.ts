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
import {MensagensPage} from "../pages/mensagens/mensagens";
import {CardMensagemComponent} from "../components/mensagem-card/mensagem-card.component";
import {ModalDetalheComponent} from "../components/mensagem-card/modal-detalhe/modal-detalhe.component";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FeedComponent,
    FuncionalidadeIconeComponent,
    LoginPage,
    CalendarioPage,
    MensagensPage,
    CardMensagemComponent,
    ModalDetalheComponent
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
    CalendarioPage,
    MensagensPage,
    CardMensagemComponent,
    ModalDetalheComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PersistenciaService,
    ModalDetalheComponent,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
