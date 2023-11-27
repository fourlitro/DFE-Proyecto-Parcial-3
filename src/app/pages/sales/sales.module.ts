import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ParentComponent } from './parent/parent.component';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  declarations: [
    TableComponent,
    ParentComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParentComponent
  ]
})
export class SalesModule { }
