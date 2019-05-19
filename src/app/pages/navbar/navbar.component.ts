import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  nombre = localStorage.getItem('user');
  UsuarioId = localStorage.getItem('mega');

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
  }

  salir() {
    this.loginService.socket.emit('Salirse', {
      nickname: localStorage.getItem('user')
    });
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
