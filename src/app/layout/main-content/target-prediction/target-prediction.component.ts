import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {JsmeComponent} from "../../../jsme/jsme/jsme.component";
@Component({
  selector: 'app-target-prediction',
  templateUrl: './target-prediction.component.html',
  styleUrls: ['./target-prediction.component.css']
})
export class TargetPredictionComponent implements OnInit {

  @ViewChild(JsmeComponent) jsme: JsmeComponent;
  jsmeSmiles: string;
  selected = 'option2';
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.jsmeSmiles = 'CNCC(O)c1ccc(OC(=O)C(C)(C)C)c(OC(=O)C(C)(C)C)c1';
  }
  getJsmeSmiles() {
    this.jsmeSmiles = this.jsme.smiles;
  }
  goTargetPrediction(smiles: string) {
    this.router.navigate(['tpr'], {
      queryParams: {
        smiles: smiles
      }
    })
  }

}
