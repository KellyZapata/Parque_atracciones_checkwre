import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { CrearRolComponent } from './roles/crear-rol/crear-rol.component';
import { EditarRolComponent } from './roles/editar-rol/editar-rol.component';
import { BuscarRolComponent } from './roles/buscar-rol/buscar-rol.component';
import { EliminarRolComponent } from './roles/eliminar-rol/eliminar-rol.component';


@NgModule({
  declarations: [
    BuscarUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    ListarUsuarioComponent,
    CrearRolComponent,
    EditarRolComponent,
    BuscarRolComponent,
    EliminarRolComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
