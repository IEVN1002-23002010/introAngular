import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1: string = '';
  num2: string = '';
  operacion: string = '';
  resultado: number = 0;

  calcular(): void {
    switch (this.operacion) {
      case 'suma':
        this.sumar();
        break;
      case 'resta':
        this.resta();
        break;
      case 'multiplicar':
        this.multiplicar();
        break;
      case 'dividir':
        this.dividir();
        break;
    }
  }


  sumar(): void {
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }

  resta(): void {
    this.resultado = parseInt(this.num1) - parseInt(this.num2);
  }

  multiplicar(): void {
    this.resultado = parseInt(this.num1) * parseInt(this.num2);
  }

  dividir(): void {
    this.resultado = parseInt(this.num1) / parseInt(this.num2);
}
}