import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciodesesion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './iniciodesesion.component.html',
  styleUrl: './iniciodesesion.component.css'
})
export class IniciodesesionComponent {

  usuario:string="";
  contrasena:string="";

  constructor(private router: Router) { }

  ingresar():void{
    if(!this.usuario || !this.contrasena){
      alert("Por favor,rellena los campos")
      return;
    }
    this.router.navigate(['principal'])
  }

  registrar(){
    this.router.navigate(['registro'])
  }

  cambiar(){
    this.router.navigate(['olvide'])
  }
}
