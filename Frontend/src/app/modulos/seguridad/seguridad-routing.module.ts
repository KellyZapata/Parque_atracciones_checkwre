import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';

const routes: Routes = [
  {
    path: 'login',
    component: IdentificacionComponent,
  },
  {
    path: 'signin',
    component: RegistrarseComponent,
  },
  {
    path: 'recovery_password',
    component: RecuperarClaveComponent,
  },
  {
    path: 'login/:token',
    component: LoginComponent,
  },
  {
    path: 'cerrarsesion',
    component: CerrarSesionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {}
