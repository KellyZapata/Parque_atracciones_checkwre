import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from '../../servicios/seguridad.service';
import { ModeloIdentificar } from '../../modelo/identificar.modelo';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  seInicioSesion: boolean = false;

  subs: Subscription = new Subscription();
  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnsesion().subscribe((datos:ModeloIdentificar)=>{
      if (Object.keys(datos).length > 0){
        this.seInicioSesion = true;
      }else{
        this.seInicioSesion = false;
      }
    })
  }

}
