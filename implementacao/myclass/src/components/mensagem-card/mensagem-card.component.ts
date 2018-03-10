import {Component, OnInit} from "@angular/core";
import {PersistenciaService} from "../../infra/persistencia/persistencia.service";
import {ModalController} from "ionic-angular";
import {ModalDetalheComponent} from "./modal-detalhe/modal-detalhe.component";

@Component({
  selector:'oc-card-mensagem',
  templateUrl:'./mensagem-card.component.html',
  styles:['./mensagem-card.component.scss']
})
export class CardMensagemComponent implements OnInit{

  // @Input() public mensagem:any;

  constructor(
              private persistencia:PersistenciaService,
              private modalCtrl: ModalController
  ){
  }

  ngOnInit(){

  }


  openModalDetalhe(){
    let teste = this.modalCtrl.create(ModalDetalheComponent, { userId: 8675309 });
    teste.present();
  }

  diaSemanaDescricao(codDia:number): string{
    let temp: string = '';
      switch (codDia){
        case 0:
          temp = 'DOMINGO';
          break;
        case 1:
          temp = 'SEGUNDA';
          break;
        case 2:
          temp = 'TERCA';
          break;
        case 3:
          temp = 'QUARTA';
          break;
        case 4:
          temp = 'QUINTA';
          break;
        case 5:
          temp = 'SEXTA';
          break;
        case 6:
          temp = 'SABADO';
          break;
      }
    return temp;
  }

}
