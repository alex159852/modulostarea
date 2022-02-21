import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductoComponent } from "src/app/components/producto/producto.component";
import {  RouterModule } from '@angular/router';
import { ProductonuevoComponent } from "src/app/components/producto/productonuevo/productonuevo.component";
//export 
const AdminLayoutRoutes:Routes=[
    {
        path:'producto',
        component:ProductoComponent
    },
    {
        path:'productoform',
        component:ProductonuevoComponent
    },
    {
        path:'productoform/:id',
        component:ProductonuevoComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutesR{}