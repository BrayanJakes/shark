import { Injectable } from '@angular/core';
import { URI } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

   U = `${URI}/login`;


  constructor() {


   }
}
