import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ParentComponent } from './parent/parent.component';
import { SummaryComponent } from './summary/summary.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TableComponent,
    ParentComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
  ],
  exports:[
    ParentComponent
  ]
})
export class SalesModule { }
