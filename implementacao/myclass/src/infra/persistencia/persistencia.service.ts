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
        nomeAula : "Proj. Lóg. de Compu.",
        prof : "Ricardo Loiola",
        alerta :[{
          data:new Date().setFullYear(2017,11,4),
          nivelAlerta: 1,
          texto:"Apresentação dos trabalhos."
        }]
      },{
        diaSemana : DiaSemanaEnum.SEGUNDA,
        horario : 2,
        nomeAula : "Processamento de Imagem",
        prof : "Gerson",
        alerta :[{
          data:new Date().setFullYear(2017,11,4),
          nivelAlerta: 1,
          texto:"Apresentação dos trabalhos."
        }]
      },{
        diaSemana : DiaSemanaEnum.TERCA,
        horario : 1,
        nomeAula : "Sistemas de Operacionais Abertos",
        prof : "A Definir",
        alerta :[{
          data:new Date().setFullYear(2017,11,4),
          nivelAlerta: 1,
          texto:"Apresentação dos trabalhos."
        }]
      },{
        diaSemana : DiaSemanaEnum.QUARTA,
        horario : 1,
        nomeAula : "Analise Matemática",
        prof : "Solange",
        alerta :[{
          data:new Date().setFullYear(2017,11,4),
          nivelAlerta: 1,
          texto:"Apresentação dos trabalhos."
        }]
      },{
        diaSemana : DiaSemanaEnum.QUARTA,
        horario : 2,
        nomeAula : "Telecomunicações",
        prof : "Carlos Geber",
        alerta :[{
          data:new Date().setFullYear(2017,11,4),
          nivelAlerta: 1,
          texto:"Apresentação dos trabalhos."
        }]
      },{
        diaSemana : DiaSemanaEnum.QUINTA,
        horario : 1,
        nomeAula : "Sistema de Informações Inteligentes",
        prof : "Robson",
        alerta :[{
          data:new Date().setFullYear(2017,11,4),
          nivelAlerta: 1,
          texto:"Apresentação dos trabalhos."
        }]
      },{
        diaSemana : DiaSemanaEnum.QUINTA,
        horario : 2,
        nomeAula : "Administração",
        prof : "Fernando Bonfim",
        alerta :[{
          data:new Date().setFullYear(2017,11,4),
          nivelAlerta: 1,
          texto:"Apresentação dos trabalhos."
        }],
        quinzenal:true
      },{
        diaSemana : DiaSemanaEnum.SEXTA,
        horario : 1,
        nomeAula : "CC Interdiciplinar",
        prof : "Gerson",
        alerta :[{
          data:new Date().setFullYear(2017,11,1),
          nivelAlerta: 1,
          texto:"Apresentação dos trabalhos."
        }]
      },{
        diaSemana : DiaSemanaEnum.SEGUNDA,
        horario : 1,
        nomeAula : "CC Interdiciplinar",
        prof : "Gerson",
        alerta :[{
          data:new Date().setFullYear(2017,11,4),
          nivelAlerta: 1,
          texto:"Apresentação dos trabalhos."
        }]
      }
    ];

  }

  getMensagens():Array<Mensagens>{
    return [
      {
        data:new Date().setFullYear(2017,10,29),
        materia:'Analise Matematica',
        descricao:'Prova de Analise Matematica \n Entrega do trabalho de Analise Matematica'
      },
      {
        data:new Date().setFullYear(2017,11,1),
        materia:'CC Interdiciplinar',
        descricao:'Apresentação do trabalho de Interdiciplinar'
      },
      {
        data:new Date().setFullYear(2017,11,7),
        materia:'Administração',
        descricao:`Vista de NP2 \n Prova Substutiva`
      },
      {
        data:new Date().setFullYear(2017,11,29),
        materia:'ATENÇÃO !!!',
        descricao:'Não esqueçam de marcar as provas de DP.'
      }
    ];
  }
}

export interface GradeHoraria{
  diaSemana:DiaSemanaEnum;
  horario:number;
  nomeAula:string;
  prof:string;
  alerta:Array<Alerta>;
  quinzenal?:boolean;
}

export interface Alerta{
  data:any;
  nivelAlerta:number;
  materia?:string;
  texto:string;
}

export interface Mensagens{
  data:any;
  materia:string;
  descricao:string;
  img?:string;
}

