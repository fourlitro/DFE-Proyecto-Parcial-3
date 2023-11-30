// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sale } from '../models/ventas';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // Define BehaviorSubjects para los datos que quieres compartir
  private dataSubject = new BehaviorSubject<Sale[]>([]);
  private productosTotalSubject = new BehaviorSubject<number>(0);
  private precioTotalSubject = new BehaviorSubject<number>(0);

  // Define observables a partir de los BehaviorSubjects
  data$ = this.dataSubject.asObservable();
  productosTotal$ = this.productosTotalSubject.asObservable();
  precioTotal$ = this.precioTotalSubject.asObservable();

  // Método para actualizar los datos
  updateData(data: Sale[]) {
    this.dataSubject.next(data);
  }

  updateProductosTotal(productosTotal: number) {
    this.productosTotalSubject.next(productosTotal);
  }

  updatePrecioTotal(precioTotal: number) {
    this.precioTotalSubject.next(precioTotal);
  }
}
