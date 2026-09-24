import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList{
  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

showImage():void{
  this.muestraImage=!this.muestraImage
}

  heroes:IHeroes[]=[
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      descripcion: "Kame kame ha",
      race: "Saiyan",
      ki: 9000,
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      descripcion: "Final flash",
      race: "Saiyan",
      ki: 8500,
    },
    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Picolo",
      descripcion: "Farmeador de aura",
      race: "Namekino",
      ki: 8000,
    },
    {
      imagen: "https://dragonball-api.com/characters/Freezer.webp",
      nombre: "Freezer",
      descripcion: "Volvio a revivir, otra vez",
      race: "Frieza",
      ki: 9000,
    },
  ]
}
