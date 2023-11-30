import { Component } from '@angular/core';
import { Videojuego } from 'src/app/models/videojuegos';
import { VideojuegosService } from 'src/app/utils/videojuegos.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private videojuegosService: VideojuegosService){

  }
  videojuegos:any;

  ngOnInit(){
    this.videojuegosService.getAll<Videojuego[]>('videojuegos').subscribe((res)=>{
      this.videojuegos = res;
    })
  }

  hasSend:boolean = false;
  timeout:any;
  saleAdded(){
    this.hasSend = true;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(()=>{
        this.hasSend = false
    },2000);
  }
}
