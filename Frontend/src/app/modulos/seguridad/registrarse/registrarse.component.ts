import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SusuariosService } from '../../../servicios/susuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
})
export class RegistrarseComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    nombres: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    telefono_fijo: [''],
    telefono_celular: ['', [Validators.required]],
    correo_electronico: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private serviciousuarios: SusuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  Registro() {
    let datos_usuario = {
      nombres: this.fgValidador.controls['nombres'].value,
      apellidos: this.fgValidador.controls['apellidos'].value,
      telefono_celular: this.fgValidador.controls['telefono_celular'].value,
      telefono_fijo: this.fgValidador.controls['telefono_fijo'].value,
      correo_electronico: this.fgValidador.controls['correo_electronico'].value,
    };

    this.serviciousuarios.RegistrarUsuario(datos_usuario).subscribe(
      (datos: any) => {
        Swal.fire({
          title: 'Registro',
          text: 'Usuario registrado con exito',
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
