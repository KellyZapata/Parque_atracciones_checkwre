import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css'],
})
export class IdentificacionComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    correo_electronico: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  Identificarusuario() {
    let datos = {
      correo_electronico: this.fgValidador.controls['correo_electronico'].value,
      clave: this.fgValidador.controls['clave'].value,
    };

    this.servicioSeguridad.obtenerCodigo(datos).subscribe(
      (datos: any) => {
        this._router.navigateByUrl('seguridad/login/' + datos.token);
      },
      (error: any) => {
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    );
  }
}
