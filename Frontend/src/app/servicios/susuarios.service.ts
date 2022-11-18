import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SusuariosService {


  constructor(private http: HttpClient) { }

  RegistrarUsuario(datos_usuario: object){
  return this.http.post("http://localhost:3000/api/auth/signup", datos_usuario, {
      headers: new HttpHeaders({})
    }
    )
  }
  }
