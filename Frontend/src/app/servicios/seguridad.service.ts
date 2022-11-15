import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelo/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) {

  }
  identificar(datos:object,token?:string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>("http://localhost:3000/api/auth/login" + (token ? '/'+ token:"" ),datos,{
      headers: new HttpHeaders({})
    }
    )

  }
}

