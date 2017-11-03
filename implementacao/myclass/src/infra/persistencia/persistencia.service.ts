import {Injectable} from "@angular/core";
import {DiaSemanaEnum} from "../enum/dia-semana.enum";
// import {Http} from "@angular/http";private http:Http

@Injectable()
export class PersistenciaService{
  constructor(){}

  getGrade(): Array<GradeHoraria>{
    return [
      {
        diaSemana : DiaSemanaEnum.SEGUNDA,
        horario : 1,
        nomeAula : "Proj. Lógico de Computadores",
        prof : "Ricardo Loiola",
        alerta : false
      },{
        diaSemana : DiaSemanaEnum.SEGUNDA,
        horario : 2,
        nomeAula : "Processamento de Imagem",
        prof : "Gerson",
        alerta : false
      },{
        diaSemana : DiaSemanaEnum.TERCA,
        horario : 1,
        nomeAula : "Sistemas de Operacionais Abertos",
        prof : "A Definir",
        alerta : true
      },{
        diaSemana : DiaSemanaEnum.QUARTA,
        horario : 1,
        nomeAula : "Analise Matemática",
        prof : "Solange",
        alerta : true
      },{
        diaSemana : DiaSemanaEnum.QUARTA,
        horario : 2,
        nomeAula : "Telecomunicações",
        prof : "Carlos Geber",
        alerta : true
      },{
        diaSemana : DiaSemanaEnum.QUINTA,
        horario : 1,
        nomeAula : "Sistema de Informações Inteligentes",
        prof : "Robson",
        alerta : false
      },{
        diaSemana : DiaSemanaEnum.QUINTA,
        horario : 2,
        nomeAula : "Administração",
        prof : "Fernando Bonfim",
        alerta : false,
        quinzenal:true
      },{
        diaSemana : DiaSemanaEnum.SEXTA,
        horario : 1,
        nomeAula : "CC Interdiciplinar",
        prof : "Gerson",
        alerta : false
      }
    ];

    // let gradeHoraria:[GradeHoraria]=
    // return gradeHoraria;

  }
}

export interface GradeHoraria{
  diaSemana:DiaSemanaEnum;
  horario:number;
  nomeAula:string;
  prof:string;
  alerta:boolean;
  quinzenal?:boolean;
}
