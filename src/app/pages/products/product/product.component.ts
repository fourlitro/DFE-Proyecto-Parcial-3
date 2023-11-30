import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sale } from 'src/app/models/ventas';
import { Videojuego } from 'src/app/models/videojuegos';
import { VideojuegosService } from 'src/app/utils/videojuegos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() videojuegos!: Videojuego[];
  @Output('saleSave') saleSave:EventEmitter<any> = new EventEmitter();
  
  // Nueva propiedad para almacenar la cantidad ingresada por el usuario.
  cantidadSeleccionada: number = 1;
  
  

  constructor(
    private videojuegosService: VideojuegosService
  ) { }


  buyVideogame(e: any): void {
    const id: number = +e.target.id;
  
    // Verificar que el id sea un número válido
    if (isNaN(id)) {
      console.error('Error: El ID del videojuego no es válido.');
      return;
    }
  
    // Buscar el videojuego con el id proporcionado
    const product: Videojuego | undefined = this.videojuegos.find((v) => v.id === id);
  
    // Verificar que se haya encontrado el videojuego
    if (!product) {
      console.error('Error: No se encontró el videojuego con el ID proporcionado.');
      return;
    }
  
    console.log(product.precioVenta);
    const precioNumerico = parseFloat(product.precioVenta);
    const resultado = `$${precioNumerico * this.cantidadSeleccionada}`;
    console.log(resultado)

    const newSale: Sale = {
      idVideojuego: id,
      cantidad: this.cantidadSeleccionada,
      precio: resultado, // Actualizado para calcular el precio total
      fecha: new Date().toISOString().substring(0, 10),
    };
  
    this.videojuegosService.postData<Sale>('ventas', newSale).subscribe((res) => {
      console.log(`Posted data: ${res}`);
      this.saleSave.emit();
    });
  }
  
}
