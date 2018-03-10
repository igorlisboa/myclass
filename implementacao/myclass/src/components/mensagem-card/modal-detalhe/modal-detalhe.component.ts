import {Component, OnInit} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector:'oc-modal-detalhe',
  templateUrl:'./modal-detalhe.component.html',
  styles:['./modal-detalhe.component.scss']
})
export class ModalDetalheComponent implements OnInit{

  constructor(public params: NavParams,
              private viewCtrl: ViewController){

  }

  ngOnInit(){
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
