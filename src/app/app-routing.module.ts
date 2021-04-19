import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';




const routes: Routes = [

    // path: '/dashboard' PagesRouting
    // path: '/auth' AuthRouting
    // path: '/medicos' MedicosRouting
    // path: '/compras' ComprasRouting
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redireccional al dashboard
    { path: '**', component: NopagefoundComponent } // Cualquier ruta que no este establecida en los elementos anteriores sera redirigida a este componente
];


@NgModule({
  imports: [ 
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
