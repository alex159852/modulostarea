import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  lista:Producto[] = [];
  constructor(private Producto:ProductoService ) { }
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
              nombre:item.payload.doc.data().nombre,
              descripcion:item.payload.doc.data().descripcion,
              precio:item.payload.doc.data().precio,
              foto:item.payload.doc.data().foto
            }
          );

        })
        console.log("Datos del servidor firebase",this.lista);
      }
    )
  }
  borrar($event:any,prod:Producto){
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
              nombre:item.payload.doc.data().nombre,
              descripcion:item.payload.doc.data().descripcion,
              precio:item.payload.doc.data().precio,
              foto:item.payload.doc.data().foto
            }
          );

        })
      });
  }

}
