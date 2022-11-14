import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoJS = require("cryptojs");

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
  'usuario': ['',[Validators.required, Validators.email]],
  'clave': ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder,
  private servicioSeguridad: SeguridadService){ }

  ngOnInit(): void {

  }
  Identificarusuario(){
    let correo_electronico  = this.fgValidador.controls["correo_electronico"].value;
    let clave  = this.fgValidador.controls["clave"].value;
    let codigo  = this.fgValidador.controls["clave"].value;

    this.servicioSeguridad.Identificar(correo_electronico,clave)
    }



}
