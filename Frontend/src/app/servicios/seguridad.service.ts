import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelo/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {



  datosUsurarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());
  constructor(private http: HttpClient) {
    this.VerificarSesionActual();
  }
  VerificarSesionActual() {
    let datos = this.ObtenerInformacionSesion();
    if (datos) {
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar) {
    this.datosUsurarioEnSesion.next(datos);
  }


  ObtenerDatosUsuarioEnsesion() {
    return this.datosUsurarioEnSesion.asObservable();
  }

  obtenerCodigo(datos: object) {
    return this.http.post("http://localhost:3000/api/auth/login", datos, {
      headers: new HttpHeaders({})
    })
  }

  identificar(datos: object, token: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>("http://localhost:3000/api/auth/login" + (token ? '/' + token : ""), datos, {
      headers: new HttpHeaders({})
    }
    )

  }
  AlmacenarSesion(datos: ModeloIdentificar) {
    datos.estaIdentificado = true;
    let stringDAtos = JSON.stringify(datos);
    localStorage.setItem('datosSesion', stringDAtos);
    this.RefrescarDatosSesion(datos);
  }
  ObtenerInformacionSesion() {
    let datosString = localStorage.getItem('datosSesion');
    if (datosString) {
      let datos = JSON.parse(datosString);
      return datos;
    } else {
      return null;
    }
  }
  EliminarInformacionSesion() {
    localStorage.removeItem('datosSesion');
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }
  SeHaIniciadoSesion() {
    let datosString = localStorage.getItem('datosSesion');
    return datosString;
  }
}

