import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
})
export class Figuras {
  Fnum1: string = '';
  Fnum2: string = '';
  calculo: string = '';
  Fresultado: number = 0;



area(): void {
    switch (this.calculo) {
      case 'triangulo':
        this.triangulo();
        break;
      case 'rectangulo':
        this.rectangulo();
        break;
      case 'circulo':
        this.circulo();
        break;
      case 'pentagono':
        this.pentagono();
        break;
    }
  }


  triangulo(): void {
    this.Fresultado = (parseInt(this.Fnum1) * parseInt(this.Fnum2)) / 2;
  }

  rectangulo(): void {
    this.Fresultado = parseInt(this.Fnum1) * parseInt(this.Fnum2);
  }

  circulo(): void {
    this.Fresultado = 3.1416 * (parseInt(this.Fnum1))**2;
  }

  pentagono(): void {
    this.Fresultado = (5 * parseInt(this.Fnum1) * parseInt(this.Fnum2))/2;
}
}