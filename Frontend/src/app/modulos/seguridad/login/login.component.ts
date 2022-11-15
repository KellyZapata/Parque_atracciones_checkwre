import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    codigo: ['', [Validators.required]],
  });

  token: string = '';

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
   this.token = this.route.snapshot.paramMap.get('token') as string;

  }
  Identificarusuario() {
    let datos = {
      codigo: this.fgValidador.controls['codigo'].value,
    };
    this.servicioSeguridad.identificar(datos,this.token).subscribe(
      (datos: any) => {
        alert(datos.token);
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }
}
