import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Tipo } from 'src/app/Modelo/Tipo';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  tipo:Tipo=new Tipo();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getTipoId(+id)
    .subscribe(data=>{
      this.tipo=data;
    })

  }
  Actualizar(tipos:Tipo){
    this.service.updateTipo(tipos)
    .subscribe(data=>{
      this.tipo=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
