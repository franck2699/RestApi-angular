import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Tipo/listar/listar.component';
import { AgregarComponent } from './Tipo/agregar/agregar.component';
import { EditarComponent } from './Tipo/editar/editar.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'agregar',component:AgregarComponent},
  {path:'editar',component:EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
