import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/config/usuario';
import { RegistroService } from 'src/app/services/registro.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  

  form: NgForm;
  constructor(private registroService: RegistroService,
              private router: Router) { }

  ngOnInit() {
  }


  registrar(usuario) {

    if (usuario.value.clave1 !== usuario.value.clave2) {
      return $.notify({
        icon: 'warning',
        message: '<b>Contraseña</b> - Las contraseñas deben coincidir'

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

    const user: Usuario = {
      nickname: usuario.value.nombre,
      email: usuario.value.email,
      password: usuario.value.clave1
    };
    this.registroService.agregar(user).subscribe((p: any) => {

      if (!p.err) {
          $.notify({
          icon: 'notifications',
          message: '<b>Exito</b> - Usuario Registrado con exito'

      }, {
          type: 'success',
          timer: 1000,
          placement: {
              from: 'bottom',
              align: 'right'
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

          return this.router.navigate(['login']);
      }

      if (p.err.message === 'usuarios validation failed: nickname: nickname debe ser unico') {
          return $.notify({
          icon: 'warning',
          message: '<b>Nickname</b> - Ya existe un usuario con ese nickname registrado'

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
      if (p.err.message === 'usuarios validation failed: email: email debe ser unico') {
        return $.notify({
          icon: 'warning',
          message: '<b>Email</b> - Ya existe un usuario con ese email registrado'

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

    });
  }

}
