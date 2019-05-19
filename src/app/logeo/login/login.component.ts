import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/config/login';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: NgForm;
  constructor(private loginService: LoginService,
              private router: Router
             ) { if ( localStorage.getItem('JWT') === undefined ) {
                return;
             } else {
               this.router.navigate(['dashboard']);
             }
            }

  ngOnInit() {

  }



  logear(usuario) {
    if (usuario.value.email === undefined || usuario.value.clave1 === undefined) {
      return;
    }

    const user: Login = {
      email: usuario.value.email,
      password: usuario.value.clave1
    };


    this.loginService.logear(user).subscribe((resp: any) => {
      if (resp.message === 'Email Incorrecto') {
        return $.notify({
          icon: 'warning',
          message: '<b>Email</b> - Email Invalido'

      }, {
          type: 'danger',
          timer: 1000,
          placement: {
              from: 'top',
              align: 'center'
          },
          // tslint:disable-next-line:max-line-length
    //  tslint:disable-next-line:max-line-length
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            // tslint:disable-next-line:max-line-length
     // tslint:disable-next-line:max-line-length
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              // tslint:disable-next-line:max-line-length
     // tslint:disable-next-line:max-line-length
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
      }
      if (resp.message === 'Contraseña invalida') {
        return $.notify({
          icon: 'warning',
          message: '<b>Contraseña</b> - Contraseña Invalida, Vuelva a intentar'

      }, {
          type: 'danger',
          timer: 1000,
          placement: {
              from: 'top',
              align: 'center'
          },
          // tslint:disable-next-line:max-line-length
    //  tslint:disable-next-line:max-line-length
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            // tslint:disable-next-line:max-line-length
     // tslint:disable-next-line:max-line-length
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              // tslint:disable-next-line:max-line-length
     // tslint:disable-next-line:max-line-length
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
    }
      localStorage.setItem('JWT', resp.JWT);
      localStorage.setItem('user', resp.user.nickname);
      localStorage.setItem('mega', resp.user._id);
      localStorage.setItem('img', resp.user.image);

      this.loginService.socket.emit('usuario', {
        nickname: localStorage.getItem('user'),
        id: localStorage.getItem('mega'),
        img: localStorage.getItem('img')
      });
      location.reload();








  });
}

}

