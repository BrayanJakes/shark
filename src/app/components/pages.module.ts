import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';



import { PagesRoutingModule } from './pages.routing';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FechaPipe } from '../pipes/fecha.pipe';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { SidebarComponent } from '../pages/sidebar/sidebar.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { LikePipe } from '../pipes/like.pipe';
import { ImgPipe } from '../pipes/img.pipe';
import { UsuarioComponent } from './usuario/usuario.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ProfileComponent } from './profile/profile.component';
import { SmsPipe } from '../pipes/sms.pipe';




@NgModule({
  declarations: [
    DashboardComponent,
    FechaPipe,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    FileSelectDirective,
    DescripcionComponent,
    LikePipe,
    UsuarioComponent,
    EdituserComponent,
    ImgPipe,
    ProfileComponent,
    SmsPipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  exports: [
    DashboardComponent,
    FechaPipe,
    LikePipe,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ImgPipe,
    SmsPipe
  ]
})
export class PagesModule { }
