import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css']
})
export class CambiarClaveComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    clave: ['', [Validators.required]],
  });
  token: string = '';
  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
   this.token = this.route.snapshot.paramMap.get('token') as string;

  }
CambiarClave(){

   let token= this.token;
   let clave= this.fgValidador.controls['clave'].value;
   this.servicioSeguridad.RecuperarClave(token,clave).subscribe(
    (datos: any) => {
      Swal.fire({
        title: 'Exito',
        text: 'Se ha cambiado la clave con exito',
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
