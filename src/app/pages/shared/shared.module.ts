import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    BannerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BannerComponent,
    FooterComponent
  ]
})
export class SharedModule { }
