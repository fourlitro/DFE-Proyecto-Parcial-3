import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { VideojuegosService } from 'src/app/utils/videojuegos.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    VideojuegosService
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
