import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutmodule } from './layout/admin-layout/admin-layout.module';

const routes: Routes = [
   {
    path:'',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:
                ()=>
                AdminLayoutmodule 
                //import('./layout/admin-layout/admin-layout.module').then(m=>m.AdminLayoutmodule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      routes,{useHash:true}
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*******************************
 * realizar un crud con angular y firebase
 * en un nuevo proyecto
 * 
 */