import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URI } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) {
   }

  uri = `${URI}/public`;

  obtener() {

    return this.http.get(this.uri);

  }



}
