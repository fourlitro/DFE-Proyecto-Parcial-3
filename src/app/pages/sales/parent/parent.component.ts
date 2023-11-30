import { Component, OnInit } from '@angular/core';
import { VideojuegosService } from 'src/app/utils/videojuegos.service';
import { Sale } from 'src/app/models/ventas';
import { SharedService } from 'src/app/utils/shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

// Define la clase ParentComponent e implementa la interfaz OnInit.
export class ParentComponent implements OnInit {
  // Declara propiedades de la clase.
  data!: Sale[]; // Arreglo de ventas
  productosTotal!: number; // Número total de productos
  precioTotal!: number; // Precio total

  // Constructor de la clase que recibe una instancia del servicio VideojuegosService.
  constructor(
    private videojuegosService: VideojuegosService,
    private sharedService: SharedService  // Inyecta el servicio SharedService
  ) { }

  // Método para eliminar una venta.
  deleteSale(venta: any) {
    // Obtiene el ID de la venta desde el evento recibido.
    const id: string = venta.$event.target.id;

    // Realiza una solicitud HTTP DELETE al servidor para eliminar la venta.
    this.videojuegosService.delete("ventas/" + id).subscribe({
      next: (res) => {
        // Actualiza localmente los datos eliminando la venta correspondiente.
        this.data = [...this.data.filter(sale => +id !== +sale.id!)];
        console.log(this.data);

        // Llama a la función saleDeleted(), que probablemente realiza acciones adicionales después de eliminar la venta.
        this.saleDeleted();
      }
    });
    
    // Emite un evento para notificar la cantidad de videojuegos vendidos.
    venta.cantidadVideojuegosVendidos.emit();

    // Actualiza los datos utilizando el servicio SharedService
    this.sharedService.updateData(this.data);
    this.sharedService.updateProductosTotal(this.productosTotal);
    this.sharedService.updatePrecioTotal(this.precioTotal);
  }

  // Método llamado cuando se inicializa el componente.
  ngOnInit() {
    // Realiza una solicitud HTTP GET al servidor para obtener todas las ventas.
    this.videojuegosService.getAll<Sale[]>('ventas').subscribe((res) => {
      this.data = res; // Asigna los datos obtenidos al arreglo de ventas.
      this.sharedService.updateData(this.data);  // Actualiza los datos al iniciar el componente
    });

    // Llama al método cantidadVideojuegosVendidos().
    this.cantidadVideojuegosVendidos();
  }
  // Propiedades adicionales.
  hasDeleted: boolean = false; // Indica si se ha eliminado una venta.
  timeout: any; // Almacena el identificador de timeout.

  // Método para manejar el estado después de eliminar una venta.
  saleDeleted() {
    this.hasDeleted = true; // Establece hasDeleted a true.
    // Limpia el timeout existente, si existe.
    if (this.timeout) clearTimeout(this.timeout);
    // Establece un nuevo timeout para cambiar hasDeleted a false después de 3000 milisegundos (3 segundos).
    this.timeout = setTimeout(() => {
      this.hasDeleted = false;
    }, 2000);
  }



  // Método para calcular la cantidad total de videojuegos vendidos y el precio total.
  cantidadVideojuegosVendidos() {
    // Utiliza setTimeout para asegurar que se ejecute después de la obtención de datos.
    setTimeout(() => {
      // Obtiene las cantidades y precios de las ventas.
      const cantidadVendida = this.data.map(sale => sale.cantidad);
      const precioVenta = this.data.map(sale=>+sale.precio.split('$')[1]);

      // Calcula la cantidad total y el precio total.
      this.productosTotal = cantidadVendida.reduce((a, b) => a + b, 0);
      this.precioTotal = +precioVenta.reduce((a, b) => a + b, 0).toFixed(2);
    }, 500);
  }

}
