import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroService } from '../../services/registro.service';
import { ImagenService } from '../../services/imagen.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  img = localStorage.getItem('img');
  usuarioId = localStorage.getItem('mega');
  toke = localStorage.getItem('JWT');
  imagenes: any = {};
  usuarioPef: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private registroService: RegistroService,
              private imagenService: ImagenService,
              private router: Router) {
    this.usuario();
    this.misImagenes();
   }

  ngOnInit() {
  }

  usuario() {
    this.activatedRoute.params.subscribe((params: any) => {

      this.registroService.usuario(params.id, this.toke).subscribe((resp: any) => {

        if ( resp.message === 'Token incorrecto!') {
          localStorage.clear();
          this.router.navigate(['login']);
        }
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
