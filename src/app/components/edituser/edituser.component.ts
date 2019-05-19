import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { RegistroService } from '../../services/registro.service';

import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { URI } from 'src/app/config/config';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../config/usuario';

declare var $: any;

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styles: []
})
export class EdituserComponent implements OnInit {
  userID: string;
  usuarioId = localStorage.getItem('mega');
  toke = localStorage.getItem('JWT');
  h = `${URI}/usuario/${this.usuarioId}?token=${this.toke}`;

  uploader: FileUploader = new FileUploader({url: this.h, itemAlias: 'image'});

  usuarioPef: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private registroService: RegistroService,
              private router: Router) {
    this.usuario();
   }

  ngOnInit() {

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    this.uploader.onCompleteItem = (item: any, response: any, status: any) => {};
  }


  usuario() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userID = params.id;
      this.registroService.usuario(params.id, this.toke).subscribe((resp: any) => {

        if (resp.message === 'Token incorrecto!') {
          localStorage.clear();
          this.router.navigate(['login']);

        }
        this.usuarioPef = resp.solicitud;
        localStorage.setItem('img', resp.solicitud.image);
      });
    });
  }

  agregarFoto() {
    this.uploader.uploadAll();
  }

  actualizarUser(form: NgForm) {

    if (form.value.clave1 !== form.value.clave2) {
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

    const usuario: Usuario = {
      nickname: form.value.nickname,
      email: form.value.email,
      password: form.value.clave1,
      description: form.value.description
    };
    this.registroService.actualizar(usuario, this.userID, this.toke).subscribe((resp: any) => {
      $.notify({
        icon: 'notification',
        message: '<b>Actualizado</b> - Usuario Actualizado con exito'

    }, {
        type: 'success',
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
    });
  }
}
