import { Component } from '@angular/core'; 

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})
export class Distancia {
  x1: string = '';
  x2: string = '';
  y1: string = '';
  y2: string = '';
  distanciacalcu: number = 0;


  coordenada(): void {
    this.distanciacalcu = Math.sqrt(((parseInt(this.x2) - parseInt(this.x1))**2) + ((parseInt(this.y2) - parseInt(this.y1))**2));
  }
}


