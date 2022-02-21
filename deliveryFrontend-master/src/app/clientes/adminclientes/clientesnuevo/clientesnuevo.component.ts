import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-clientesnuevo',
  templateUrl: './clientesnuevo.component.html',
  styleUrls: ['./clientesnuevo.component.css']
})
export class ClientesnuevoComponent implements OnInit {
  item:Clientes=new Clientes();
  seccion='clientes';
  edit:boolean=false;
  constructor(private dbProd:ClientesService,
      private router:Router,
      private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      if(params.id){
        this.edit=true;
        this.item.key=params.id
        this.dbProd.getItem(params.id).snapshotChanges().subscribe(a=>{
          console.log(a.payload.data());
          let prod:any;
          prod=a.payload.data();
          this.item= Object.assign(
            { 
              key:a.payload.id,
              id:a.payload.id,
              nombre:a.payload.nombre,
              apellidos:a.payload.apellidos,
              direccion:prod.direccion,
              telefono:prod.telefono,
              foto:prod.foto
            }
          );
        });
        //editar producto
      }else
      {
        this.edit=false;
        console.log("nuevo!!!!")
        //nuevo producto
      }
    });
  }
  enviar(){
    if(this.edit){
      this.dbCli.edit((String)(this.item.key),this.item);
    }else{

      this.dbCli.add(this.item).then(a=>{
        console.log("datos server",a);
      });
    }
    Swal.fire({ title: 'Datos guardados',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {}
        this.router.navigate(['/'+this.seccion]);
    });
    
  } 
  salir(){}
}
