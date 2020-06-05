import { Component, OnInit,AfterViewInit, ViewChild,ElementRef ,Input,} from '@angular/core';
import {RestService} from '../../../service/rest/rest.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {PageMeta} from '../../../models/page-meta';
import {FormControl} from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-table-target',
  templateUrl: './table-target.component.html',
  styleUrls: ['./table-target.component.css']
})
export class TableTargetComponent implements OnInit {
  total_results:number;
  params;
  private gridApi;
  private gridColumnApi;
  paginationPageSize=10;
  paginationGetRowCount;
  paginationGetTotalPages;
  fileName1;
  sheetName1;
  @ViewChild('agGrid') agGrid: AgGridAngular;
  columnDefs = [
    // checkboxSelection: true , 
    {headerName: 'Pref Name', field: 'name', sortable: true, filter: true, width:260  },
    {headerName: 'Target Id', field: 'tid', sortable: true, filter: true, width:260 ,  },
    {headerName: 'Target Type ', field: 'type', sortable: true, filter: true, width:260  },
    {headerName: 'Target Class ', field: 'target_class', sortable: true, filter: true, width:260  },
    {headerName: 'Organism', field: 'organism', sortable: true, filter: true, width:260  }
    
  ];
    toppings = new FormControl();
    toppingList: string[] = ['Pref Name', 'Target Id', 'Target Type','Target Class','Organism'];
    displayedColumns: string[] = ['Pref Name', 'Target Id', 'Target Type','Target Class','Organism'];
    images = [];
    result1: string;
    scontent: string;
    // 分页
    pageMeta: PageMeta | null;
    @ViewChild('content') content: ElementRef;
    @ViewChild(MatSort) sort: MatSort;
    @Input() result1$: Observable<string>;
    @Input() pageSizeOptions = [10,20,50,100];
    @Input() pageSize = 10;
constructor(
    private restservice: RestService ,
    private myrouter: ActivatedRoute,
    private myRouter: Router,
    ) { }
ngOnInit() {
    this.myrouter.paramMap.subscribe((params: ParamMap) => {
    console.log(params);
    this.result1 = params.get('id');
    this._getDrugs(0, this.pageSize);
  });
}
hqnew() {
      this.result1 = this.content.nativeElement.value;
      this._getDrugs(0, this.pageSize);
}
private _getDrugs(page?, perPage?) {
    this.restservice.getDataList(`TargetInfo/${this.result1}&ordering=target_id`, page, perPage)
    .subscribe(data => {
      this.images = data['target_infos'];
      this.total_results = data['meta']['total_results'];
      console.log(this.images);
    });
}
pageChange(event) {
  this._getDrugs(event.pageIndex, event.pageSize);
}
cellClicked(params){
  this.myRouter.navigateByUrl(`target/${params.data.tid}`)
  console.log(params)
}
cellMouseDown(params){}
onBtExport() {
  this.params = {
    fileName: this.fileName1,
    sheetName: this.sheetName1
  };
  this.gridApi.exportDataAsCsv(this.params);
}
onGridReady(params) {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
}

// downloadFile(data: any, type: number, name: string) {
//   const blob = new Blob([data], {type: 'text/csv'});
//   const dataURL = window.URL.createObjectURL(blob);

//   // IE doesn't allow using a blob object directly as link href
//   // instead it is necessary to use msSaveOrOpenBlob
//   if (window.navigator && window.navigator.msSaveOrOpenBlob) {
//     window.navigator.msSaveOrOpenBlob(blob);
//     return;
//   }

//   const link = document.createElement('a');
//   link.href = dataURL;
//   link.download = 'export file.csv';
//   link.click();

//   setTimeout(() => {

//     // For Firefox it is necessary to delay revoking the ObjectURL
//     window.URL.revokeObjectURL(dataURL);
//     }, 100);
//   }




// download(){

//   this.headers = new Headers({});
//   this.headers.append('Authorization', this.storageSvc.getUserToken());
//   let ActionUrl = 'http://192.168.1.138:9003/download/?pk=NPChemInfo';

//   this.http.get(ActionUrl , { headers: this.headers }).subscribe(data =>
//     this.downloadFile(data.text())),
//     error => console.log(error ),
//     () => console.info("OK");

//   }

}
