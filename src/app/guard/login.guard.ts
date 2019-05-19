import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private login: LoginService,
              private router: Router) {}

canActivate() {
  if ( this.login.estaLogueado()) {
  return true;
}



  this.router.navigate(['login']);
  return false;

}
}
