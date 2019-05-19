import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './components/pages.module';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';







// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './pages/page/page.component';
import { LoginComponent } from './logeo/login/login.component';
import { RegistroComponent } from './logeo/registro/registro.component';
import { SocketService } from './services/socket.service';









@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LoginComponent,
    RegistroComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    FileUploadModule

  ],
  providers: [ SocketService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
