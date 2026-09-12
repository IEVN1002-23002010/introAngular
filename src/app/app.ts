import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
  titulo:string="Christofer Villaseñor"
  duplicaNumero(num:number):number{
    return num*2
  }

  pelicula={
      titulo:"El pádrino",
      anio:1972,
      genero:"Crimen/Drama",
      fechaLanzamiento:new Date(),
      precio:345
    }

}


