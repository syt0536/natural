import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsmeModule} from './jsme/jsme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalService} from './service/global/global.service';
import { RestService} from './service/rest/rest.service';
import { ShouyeComponent } from './layout/shouye/shouye.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './layout/main-content/table/table.component';
import { CoreModule} from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './layout/main-content/details/details.component';
import { SearchComponent } from './layout/main-content/search/search.component';
import { TargetComponent } from './layout/main-content/Target/target/target.component';
import { TableTargetComponent } from './layout/main-content/table-target/table-target.component';
import { ElModule } from 'element-angular';
import { BottomComponent } from './layout/main-content/bottom/bottom.component';
import 'element-angular/theme/index.css';
import { SearchRComponent } from './layout/main-content/search-r/search-r.component';
import { BCompoundComponent } from './layout/main-content/Bioactivites/b-compound/b-compound.component';
import { BDerivativeComponent } from './layout/main-content/Bioactivites/b-derivative/b-derivative.component';
import { BTargetComponent } from './layout/main-content/Bioactivites/b-target/b-target.component';
import { PropertiesCardComponent } from './share/card/properties-card/properties-card.component';
import { TargetCardComponent } from './share/card/target-card/target-card.component';
import { ContactComponent } from './layout/main-content/contact/contact.component';
import { AgGridModule } from 'ag-grid-angular';
import { TableCompoundComponent } from './layout/main-content/table-compound/table-compound.component';
import { ChemicalScreeningComponent } from './layout/main-content/chemical-screening/chemical-screening.component';
import { TargetPredictionComponent } from './layout/main-content/target-prediction/target-prediction.component';
import { FileUploadModule } from 'ng2-file-upload';
import { TPResultComponent } from './layout/main-content/t-p-result/t-p-result.component';
import { DerivativeComponent } from './layout/main-content/derivative/derivative.component';
import { TableDerivativeComponent } from './layout/main-content/table-derivative/table-derivative.component';
import { BTargetDComponent } from './layout/main-content/Bioactivites/b-target-d/b-target-d.component';
import { ToRPipe } from './share/pipe/to-r.pipe';
import { SearchMmpComponent } from './layout/main-content/search-mmp/search-mmp.component';
import { HelpComponent } from './layout/help/help.component';
@NgModule({
  declarations: [
    AppComponent,
    ShouyeComponent,
    TableComponent,
    DetailsComponent,
    SearchComponent,
    TargetComponent,
    TableTargetComponent,
    BottomComponent,
    SearchRComponent,
    BCompoundComponent,
    BDerivativeComponent,
    BTargetComponent,
    PropertiesCardComponent,
    TargetCardComponent,
    ContactComponent,
    TableCompoundComponent,
    ChemicalScreeningComponent,
    TargetPredictionComponent,
    TPResultComponent,
    DerivativeComponent,
    TableDerivativeComponent,
    BTargetDComponent,
    ToRPipe,
    SearchMmpComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsmeModule,
    BrowserAnimationsModule,
    CoreModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    ElModule.forRoot(),
    FileUploadModule

  ],
  entryComponents: [PropertiesCardComponent,TargetCardComponent],
  providers: [
    GlobalService,
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
