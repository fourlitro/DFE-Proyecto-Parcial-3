import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { SalesModule } from './pages/sales/sales.module';
import { ParentComponent } from './pages/sales/parent/parent.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent,
  },
  {
    path:"/sales", component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
