import { Component, Input } from '@angular/core';
import { Pelicula } from '../../Clases/Pelicula';

@Component({
  selector: 'app-cajapelicualas',
  standalone: true,
  imports: [],
  templateUrl: './cajapelicualas.component.html',
  styleUrl: './cajapelicualas.component.css'
})
export class CajapelicualasComponent {
  @Input() pelicula:Pelicula=new Pelicula();
}
