import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() action!:string;
  @Input() message!:string;
  
  getImagePath(): string {
    // Lógica para determinar la ruta de la imagen según el caso
    switch (this.action) {
      case 'lol':
        return `../../../../assets/gifs/lol.gif`;
      case 'kyrby':
        return '../../../../assets/gifs/kirby.gif';
      // Agrega más casos según sea necesario
      default:
        return '../../../../assets/gifs/kirby.gif'; // Ruta por defecto o imagen predeterminada
    }
  }
}
