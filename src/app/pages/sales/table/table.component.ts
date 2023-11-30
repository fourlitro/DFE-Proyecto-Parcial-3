import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { VideojuegosService } from 'src/app/utils/videojuegos.service';
import { Videojuego } from 'src/app/models/videojuegos';
import { Sale } from 'src/app/models/ventas';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Entrada de datos desde el componente padre (ventas a mostrar en la tabla).
  @Input() data!: Sale[];

  // Emite un evento cuando se necesita conocer la cantidad de videojuegos vendidos.
  @Output('cantidadVideojuegosVendidos') cantidadVideojuegosVendidos: EventEmitter<any> = new EventEmitter();

  // Emite un evento cuando se elimina una venta.
  @Output() deleteSale: EventEmitter<any> = new EventEmitter(); 

  // Arreglo que almacenará información sobre videojuegos.
  videojuegos?: Videojuego[];

  // Constructor que recibe una instancia del servicio VideojuegosService.
  constructor(private videojuegoService: VideojuegosService) {}

  // Método que se ejecuta al inicializar el componente.
  ngOnInit() { 
    // Obtiene la lista de videojuegos desde el servicio.
    this.videojuegoService.getAll<Videojuego[]>('videojuegos').subscribe((res) => {
      this.videojuegos = res;
      console.log(res);
    });
  }

  // Método para obtener el título de un videojuego a partir de su ID.
  getTitulo(id: number, products: Videojuego[]) {
    return products.find(product => id === +product.id)?.titulo;
  }

  getPrecio(id: number, products: Videojuego[]){
    return products.find(product => id === +product.id)?.precioVenta;
  }
}
