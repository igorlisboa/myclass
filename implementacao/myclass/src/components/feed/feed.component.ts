import {Component, OnInit} from "@angular/core";
import {GradeHoraria, PersistenciaService} from "../../infra/persistencia/persistencia.service";

@Component({
  selector:'mc-feed',
  templateUrl:'./feed.component.html',
  styleUrls:['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  public gradeHoraria:Array<GradeHoraria>;

  constructor(private persistencia:PersistenciaService){
  }

  ngOnInit(){
    this.gradeHoraria = this.persistencia.getGrade();
  }
}
