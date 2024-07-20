import { Component } from '@angular/core';
import { CajapelicualasComponent } from '../../Componentes/cajapelicualas/cajapelicualas.component';
import { Pelicula } from '../../Clases/Pelicula';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CajapelicualasComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  peliculas:Pelicula[]=[
    { id: 1, nombre: 'IT', imagen: 'https://es.web.img3.acsta.net/pictures/17/04/07/12/58/197841.jpg', tipo: 'Terror' },
    { id: 2, nombre: 'Shrek 4', imagen: 'https://m.media-amazon.com/images/S/pv-target-images/a330d6bf726c4af2b90f2df1c3ebd0d0a61b2344ac70441bb9e9206c2b2674da.jpg', tipo: 'Comedia' },
    { id: 3, nombre: 'Intesamente 2', imagen: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png', tipo: 'Comedia' },
    { id: 4, nombre: 'Intesamente 2', imagen: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png', tipo: 'Comedia' },
    { id: 5, nombre: 'Intesamente 2', imagen: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png', tipo: 'Comedia' },
    { id: 6, nombre: 'Intesamente 2', imagen: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png', tipo: 'Comedia' },
    { id: 7, nombre: 'Intesamente 2', imagen: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png', tipo: 'Comedia' },
    { id: 8, nombre: 'Intesamente 2', imagen: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png', tipo: 'Comedia' },
    { id: 9, nombre: 'Intesamente 2', imagen: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png', tipo: 'Comedia' },
    { id: 10, nombre: 'Intesamente 2', imagen: 'https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png', tipo: 'Comedia' }

  ]

  peliculasFiltradas:Pelicula[]=[...this.peliculas]


  buscar(nombre:string):void{
    if (nombre) {
      this.peliculasFiltradas = this.peliculas.filter(pelicula =>
        pelicula.nombre?.toLowerCase().includes(nombre.toLowerCase())
      );
    } else {
      this.peliculasFiltradas = [...this.peliculas];
    }
  }
  

}
