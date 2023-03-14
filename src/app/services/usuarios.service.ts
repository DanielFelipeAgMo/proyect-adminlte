import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  _url = 'http://127.0.0.1:5000/prueba'
  constructor(private http: HttpClient) { 
    console.log('Servicio usuarios')
  }
  getUsuarios(){
    let header = new HttpHeaders().set('Type-content','aplication/json')

    return this.http.get(this._url,{
      headers: header
    })

  }
}
