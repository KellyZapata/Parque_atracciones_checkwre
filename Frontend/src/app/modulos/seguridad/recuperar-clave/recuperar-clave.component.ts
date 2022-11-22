import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css'],
})
export class RecuperarClaveComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    correo_electronico: ['', [Validators.required, Validators.email]],
  });
  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  RecuperarClave() {
    let correo_electronico =
      this.fgValidador.controls['correo_electronico'].value;
    this.servicioSeguridad.RecuperarClaveToken(correo_electronico).subscribe(
      (datos: any) => {
        Swal.fire({
          title: 'Exito',
          text: 'Se ha enviado un correo con el token',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
        this.router.navigateByUrl('/inicio');
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
