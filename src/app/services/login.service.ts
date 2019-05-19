import { Injectable } from '@angular/core';
// import * as io from 'socket.io-client';
import { URI } from '../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  url = `${URI}/login`;
  // socket = io('https://backendshark.herokuapp.com');


  logear(email) {

    return this.http.post(this.url, email);


  }

  estaLogueado() {
    return ( localStorage.getItem('JWT') ) ? true : false;
  }
}
