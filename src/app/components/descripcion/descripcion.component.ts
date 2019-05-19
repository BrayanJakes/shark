import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagenService } from '../../services/imagen.service';
import { Comment } from '../../config/comment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styles: []
})
export class DescripcionComponent implements OnInit {
  img: string;
  IdUsuario: string;
  imagenId: string;
  imagen: any = {};
  commentarios: any[] = [];


  constructor(private activateRouter: ActivatedRoute,
              private imageService: ImagenService) {

              // tslint:disable-next-line:no-unused-expression
              this.foto();
            }

  ngOnInit() {


  }

  foto() {
    this.activateRouter.params.subscribe((p: any) => {
      this.imagenId = p.id;
      this.imageService.imagen(p.id).subscribe((i: any) => {

        this.imagen = i.imagen;
        this.img = i.imagen.usuario.image;
        this.IdUsuario = i.imagen.usuario._id;
      });
    });
  }


  meGusta(valor, body) {


    this.imageService.like(valor, body).subscribe((resp: any) => {
      return this.foto();
    });
  }

  AgregarComment(form: NgForm) {
    if (!form.value.comment) {
      return;
    }
    const comment: Comment = {
      comment: form.value.comment
    };
    form.value.comment = '';
    this.imageService.comment(this.imagenId, comment).subscribe((resp: any) => {

      this.foto();
    });


  }

}
