import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap, Router} from '@angular/router';
import {RestService} from '../../../service/rest/rest.service';
@Component({
  selector: 'app-search-r',
  templateUrl: './search-r.component.html',
  styleUrls: ['./search-r.component.css']
})
export class SearchRComponent implements OnInit {
  images = [];
  imagesD=[];
  id1='';
  id2='';
  obj='';
  count:number;
  num:number;
  result1: string;
  result2: string;
  structureType:string;
  drugDisplayedColumns = ['structure', 'database_id',  'amw', 'slogp', 'tpsa', 'numrotatablebonds', 'numhbd', 'numhba'];
  constructor(
    private myrouter: ActivatedRoute,
    private restservice: RestService ,
  ) { 
    
  }

  ngOnInit() {
    this.myrouter.queryParams.subscribe(queryParams => {
      console.log(queryParams);
      if(queryParams.structureType === 'structure'){
        this.result1 = queryParams.similarity;
        this.result2 = queryParams.smiles;
        this.structureType =queryParams.structureType;
        this._getDrugs(this.result2, this.result1,0);
      }
      else if  (queryParams.structureType === 'substructure'){
        // this.result1 = queryParams.similarity;
        this.result2 = queryParams.smiles;
        this.structureType =queryParams.structureType;
         this._getDrugs2(this.result2,0);
      }

    });
  }
  private _getDrugs(sea?, si?,page?) {
    this.restservice.getDataList(`Structuresimilarity/?pk1='${sea}'&pk2=${si}`,page)
    .subscribe(data => {
      console.log(data)
      this.count=data['count']
      this.num = data.length
      console.log(this.num)
      for(var i=0;i<data.length;i++){
        this.id1=data[i]['name']
      console.log(this.id1)
      if(this.id1.indexOf("N")!==-1){
        this.restservice.getDataList(`NPChemInfo/?search=${this.id1}`)
          .subscribe(data => {
            this.obj = data['np_chem_info2s'][0];
            // console.log(this.obj['name'])
            // if(this.obj['name'].indexOf("N")!==-1){
            this.images.push(this.obj)
            console.log(this.images);
          })
          }
          else{
            this.restservice.getDataList(`DerChemInfo/?search=${this.id1}`)
            .subscribe(data => {
              this.obj = data['der_chem_info2s'][0];
              this.obj['np_id']=this.obj['der_id']
              this.images.push(this.obj)
              })
            
            }
      }
     
    });
}
    private _getDrugs2(sea?,page?) {
      this.restservice.getDataList(`Substructuresimilarity/?pk='${sea}'`,page)
      .subscribe(data => {
        this.count=data['count']
        this.num = data.length
        console.log(this.num)
        for(var i=0;i<data.length;i++){
          this.id1=data[i]['name']
          if(this.id1.indexOf("N")!==-1){
          this.restservice.getDataList(`NPChemInfo/?np_id=${this.id1}`)
            .subscribe(data => {
              this.obj = data['np_chem_info2s'][0];
                // if(this.obj['name'].indexOf("N")!=-1){          
              this.images.push(this.obj)
            })
          }
          else{
                this.restservice.getDataList(`DerChemInfo/?search=${this.id1}`)
                .subscribe(data => {
                  this.obj = data['der_chem_info2s'][0];
                  this.obj['np_id']=this.obj['der_id']
                  this.images.push(this.obj) 
                              })
                
                }
              console.log(this.images);
      
          // this.pageMeta = data['meta'];
          console.log(data);
          console.log(this.images)
        }
    })}
 pageChanges(event){
  this.myrouter.queryParams.subscribe(queryParams => {
    console.log(queryParams);
    if(queryParams.structureType === 'structure'){
      this.result1 = queryParams.similarity;
      this.result2 = queryParams.smiles;
      this.structureType =queryParams.structureType;
      this._getDrugs(this.result2, this.result1,event.pageIndex);
    }
    else if  (queryParams.structureType === 'substructure'){
      // this.result1 = queryParams.similarity;
      this.result2 = queryParams.smiles;
      this.structureType =queryParams.structureType;
       this._getDrugs2(this.result2,event.pageIndex);
    }

  });
}
}
