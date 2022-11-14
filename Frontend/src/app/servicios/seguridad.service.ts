import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelo/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HTTpClient) {

  }
  identificar(usuario:string, clave: string): Observable<ModeloIdentificar>{
    return this.http.post(<ModeloIdentificar>"http://44.212.211.178/api/auth/login",{
      correo_electronico: correo_electronico,
      clave: clave,
      codigo: codigo,
    },{
      headers: new HttpHeaders({})
    }
    )

  }
}

