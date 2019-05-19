import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styles: []
})
export class PageComponent implements OnInit {

  UsuariosConectados: any[] = [];
  nickname = localStorage.getItem('user');

  constructor(private loginService: LoginService) {



   }

  ngOnInit() {

setInterval(() => {
  this.conectados();
}, 2000);


  }


  conectados() {
    this.loginService.socket.emit('conexion', null, (resp) => {
      this.UsuariosConectados = resp;
    });
  }

}
