import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Sale } from 'src/app/models/ventas';
import { SharedService } from 'src/app/utils/shared.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnDestroy {
  @Input() productosTotal!: number;
  @Input() precioTotal!: number;

  data: Sale[] = [];
  private dataSubscription!: Subscription;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    // Suscríbete a los observables del servicio SharedService
    this.dataSubscription = this.sharedService.data$.subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    // Desuscribe la suscripción para evitar posibles memory leaks
    this.dataSubscription.unsubscribe();
  }
}
