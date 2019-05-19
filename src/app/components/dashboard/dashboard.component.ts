import { Component, OnInit, ElementRef } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';
import { NgForm } from '@angular/forms';
declare var $: any;

import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';


import { URI } from '../../config/config';


import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})




export class DashboardComponent implements OnInit {

  imagenes: any[] = [];
  titulo: 'hola';
  token = localStorage.getItem('JWT');
  h = `${URI}/images/?token=${this.token}`;
  form: NgForm;

  imagen: File;




  usuarioId = localStorage.getItem('mega');
  usuarioImg: any[] = [];

  uploader: FileUploader = new FileUploader({url: this.h, itemAlias: 'image'});
  constructor(private imagenService: ImagenService,
              private el: ElementRef,
              private router: Router) {
                this.listarImagenes();

              }


  ngOnInit() {

   this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

   this.uploader.onCompleteItem = (item: any, response: any, status: any) => {

              if (response === '{"error":"archivo no admitido"}') {
                return $.notify({
                  icon: 'warning',
                  message: '<b>Imagen no Adminitida</b> - Debe seleccionar una imagen con extension .jpg, .jpeg, .png o .git'

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
              console.log(response);

  };




   this.imagenService.misImagenes(this.usuarioId).subscribe((img: any) => {

     this.usuarioImg = img.images;
   });
   }

   meGusta(valor, body) {


     this.imagenService.like(valor, body).subscribe((resp: any) => {
       return this.listarImagenes();
     });
   }

   listarImagenes() {
    this.imagenService.imagenes().subscribe((i: any) => {


      if (i.message === 'Token incorrecto!') {
        this.router.navigate(['login']);
      }
      this.imagenes = i.viewModel.images;


  });
   }


   agregarFoto() {


  this.uploader.uploadAll();


}


}
