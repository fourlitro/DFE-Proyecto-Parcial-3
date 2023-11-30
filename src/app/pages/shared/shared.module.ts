import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component'; 
import { FooterComponent } from './footer/footer.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ScrollButtonComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ScrollButtonComponent,
    ModalComponent
  ]
})
export class SharedModule { }
