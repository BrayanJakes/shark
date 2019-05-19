import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from '../pages/page/page.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginGuard } from '../guard/login.guard';



const PagesRoutes: Routes = [

    {path: '', component: PageComponent, canActivate: [LoginGuard], children: [{path: 'dashboard', component: DashboardComponent},
{path: 'descripcion/:id',  component: DescripcionComponent},
{path: 'usuario/:id',   component: UsuarioComponent},
{path: 'useredit/:id',   component: EdituserComponent},
{path: 'profile/:id',  component: ProfileComponent},
]}
];


@NgModule({
    imports: [RouterModule.forChild(PagesRoutes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }

