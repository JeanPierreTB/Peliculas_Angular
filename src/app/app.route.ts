import { Routes } from '@angular/router';
import { IniciodesesionComponent } from './Paginas/iniciodesesion/iniciodesesion.component';
import { OlvidecontrasenaComponent } from './Paginas/olvidecontrasena/olvidecontrasena.component';
import { PrincipalComponent } from './Paginas/principal/principal.component';
import { RegistrateComponent } from './Paginas/registrate/registrate.component';

export const routes: Routes = [
  { path: '', component: IniciodesesionComponent },
  { path: 'olvide', component: OlvidecontrasenaComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'registro',component:RegistrateComponent}
];


