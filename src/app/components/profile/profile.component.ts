import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistroService } from '../../services/registro.service';
import { ImagenService } from '../../services/imagen.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  img = localStorage.getItem('img');
  usuarioId: string;
  toke = localStorage.getItem('JWT');
  imagenes: any = {};
  usuarioPef: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private registroService: RegistroService,
              private imagenService: ImagenService) {
    this.usuario();
    this.misImagenes();
   }

  ngOnInit() {
  }

  usuario() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.usuarioId = params.id;
      this.registroService.usuario(params.id, this.toke).subscribe((resp: any) => {
        this.usuarioPef = resp.solicitud;
      });
    });
  }

  misImagenes() {
    this.imagenService.misImagenes(this.usuarioId).subscribe((imagenes: any) => {
      this.imagenes = imagenes.images;
    });
  }

}
