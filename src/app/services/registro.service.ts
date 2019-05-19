import { Injectable } from '@angular/core';
import { URI } from '../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  url = `${URI}/usuario`;


  agregar(persona) {
    return this.http.post(this.url, persona);
  }

  listar() {
   return this.http.get(this.url);
  }

  usuario(id, token) {
    const uri = `${this.url}/${id}?token=${token}`;
    return this.http.get(uri);
 }

 actualizar(usuario, id, token) {
   const uri = `${this.url}/${id}?token=${token}`;
   return this.http.put(uri, usuario);
 }
}
