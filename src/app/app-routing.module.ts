import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes:Routes = [
  {path: '', component:UsuariosComponent},
  {path: 'usuarios', component:UsuariosComponent},
  {path:'usuario/:id', component:UsuarioComponent},
  {path:'**',component:UsuariosComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
