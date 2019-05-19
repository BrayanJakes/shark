import { Injectable } from '@angular/core';
import { URI } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  UR = `${URI}/images`;
  token = localStorage.getItem('JWT');

  constructor(private http: HttpClient) { }

  crear(body) {
    const u = `${this.UR}?token=${this.token}`;
    return this.http.post(u, body);
  }

  imagenes() {
    const u = `${this.UR}?token=${this.token}`;
    return this.http.get(u);
  }

  misImagenes(id) {
    const u = `${URI}/img/${id}?token=${this.token}`;
    return this.http.get(u);
  }

  actualizar( id, body) {

    const u = `${this.UR}/${id}`;
    return this.http.put(u, body);

  }

  imagen(id) {
    const u = `${URI}/imagen/${id}?token=${this.token}`;
    return this.http.get(u);
  }

  like(id, body) {
    const u = `${this.UR}/${id}/like?token=${this.token}`;

    return this.http.post(u, body);

  }
  comment(id, body) {
    const u = `${this.UR}/${id}/comment?token=${this.token}`;

    return this.http.post(u, body);

  }
}
