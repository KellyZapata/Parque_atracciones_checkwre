import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    IdentificacionComponent,
    RecuperarClaveComponent,
    RegistrarseComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
