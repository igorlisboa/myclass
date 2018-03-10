import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CalendarioPage} from "../calendario/calendario";
import {MensagensPage} from "../mensagens/mensagens";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public teste:string = "teste funciona";
  public teste2:string;

  constructor(public navCtrl: NavController) {

  }


  clicou(){
    this.teste2 = this.teste;
  }

  openCalendario(){
    this.navCtrl.push(CalendarioPage);
  }

  openListaMensagens(){
    this.navCtrl.push(MensagensPage);
  }

}
