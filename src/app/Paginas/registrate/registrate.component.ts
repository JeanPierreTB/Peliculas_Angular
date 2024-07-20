import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-registrate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registrate.component.html',
  styleUrl: './registrate.component.css'
})
export class RegistrateComponent {
  usuario:string="";
  contrasena:string="";
  telefono?:number;
  direccion:string="";

  constructor(private router: Router) { }

  regresar(){
    this.router.navigate(['/'])

  }

  registrate(){
    
    this.router.navigate(['/'])
  }
}
