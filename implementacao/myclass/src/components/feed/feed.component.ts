import {Component, OnInit} from "@angular/core";
import {GradeHoraria, Mensagens, PersistenciaService} from "../../infra/persistencia/persistencia.service";

@Component({
  selector:'oc-feed',
  templateUrl:'./feed.component.html',
  styles:['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  public gradeHoraria:Array<GradeHoraria>;
  public mensagens:Array<Mensagens>;
  public aulaHoje:GradeHoraria;
  public diaDescricao: string;
  public hoje = new Date();

  constructor(private persistencia:PersistenciaService){
  }

  ngOnInit(){
    this.gradeHoraria = this.persistencia.getGrade();
    this.mensagens = this.persistencia.getMensagens();

    this.aulaHoje = this.gradeHoraria.filter(x => x.diaSemana == this.hoje.getDay())[0]
    this.diaDescricao = this.diaSemanaDescricao(this.aulaHoje.diaSemana);

    this.mensagens = this.mensagens.filter(mens =>mens.data > this.hoje).map((mens,index) =>{
      if(mens.img == undefined){
        if(index % 2 == 0){
          mens.img = '../../assets/imgs/estudando2.jpg';
        }else {
          mens.img = '../../assets/imgs/estudando.jpg';
        }
      }
      return mens;
    })

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
