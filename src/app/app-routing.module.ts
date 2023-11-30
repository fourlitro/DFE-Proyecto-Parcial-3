import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/dashboard/home/home.component';
import { ParentComponent } from './pages/sales/parent/parent.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { NotFoundComponent } from './pages/autentication/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'products', component: ProductsComponent, },
  { path: 'sales', component: ParentComponent, },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
