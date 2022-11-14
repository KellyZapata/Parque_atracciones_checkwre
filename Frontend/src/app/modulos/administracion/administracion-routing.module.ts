import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRolComponent } from './roles/crear-rol/crear-rol.component';

const routes: Routes = [
 {
  path:"crear-rol",
  component: CrearRolComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
