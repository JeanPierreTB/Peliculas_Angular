import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-olvidecontrasena',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './olvidecontrasena.component.html',
  styleUrl: './olvidecontrasena.component.css'
})
export class OlvidecontrasenaComponent {
  usuario:string="";
  contrasena:string="";

  constructor(private router: Router) { }


  regresar(){
    this.router.navigate(['/'])
  }

  cambiar(){
    if(!this.usuario || !this.contrasena){
      alert("Rellena los campos");
      return;
    }
    alert("Contraseña canbiada exitosamente");
    this.router.navigate(['/'])
    return;
  }

}
