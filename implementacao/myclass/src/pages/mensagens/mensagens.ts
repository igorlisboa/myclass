import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'mensagens-page',
  templateUrl: 'mensagens.html'
})
export class MensagensPage {
  gapi: any;

  constructor(public navCtrl: NavController) {

  }

  abrirNovaMensagem(){

  }
}
