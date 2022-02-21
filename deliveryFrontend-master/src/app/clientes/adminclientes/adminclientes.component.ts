
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-adminclientes',
  templateUrl: './adminclientes.component.html',
  styleUrls: ['./adminclientes.component.css']
})
export class AdminclientesComponent implements OnInit {

  lista:Clientes[] = [];
  constructor(private Producto:ClientesService ) { }
  search:String='';
  ngOnInit(): void {
    console.log("iniciado consulta");
    this.Producto.getAll().snapshotChanges().subscribe(
      serve=>{
        this.lista=
        serve.map(item=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              id:item.payload.doc.data().id,
              direccion:item.payload.doc.data().direccion,
              nombre:item.payload.doc.data().nombre,
              apellidos:item.payload.doc.data().apellidos,
              foto:item.payload.doc.data().foto,
              telefono:item.payload.doc.data().telefono
            }
          );

        })
        console.log("Datos del servidor firebase",this.lista);
      }
    )
  }
  borrar($event:any,prod:Clientes){
    $event.preventDefault();
    Swal.fire({
      title: 'Esta seguro de Borrar?',
      text: "Se perdera definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Producto.delete((String)(prod.key));
        Swal.fire(
          'Borrado!',
          'Su item fue borrardo.',
          'success'
        )
      }
    })
  }
  buscar(){
    this.Producto.search(this.search).snapshotChanges()
      .subscribe(serve=>{
        this.lista=
        serve.map((item:any)=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              id:item.payload.doc.data().id,
              direccion:item.payload.doc.data().direccion,
              nombre:item.payload.doc.data().nombre,
              apellidos:item.payload.doc.data().apellidos,
              foto:item.payload.doc.data().foto,
              telefono:item.payload.doc.data().telefono
            }
          );

        })
      });
  }

}
