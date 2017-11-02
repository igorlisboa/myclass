import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'botao',
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
}
