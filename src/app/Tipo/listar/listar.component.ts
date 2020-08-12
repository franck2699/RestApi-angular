import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Tipo } from 'src/app/Modelo/Tipo';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  tipos:Tipo[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getTipo()
      .subscribe(data => {
        this.tipos = data;
      });
  }
  Editar(tipos:Tipo):void{
    localStorage.setItem("id",tipos.id.toString());
    this.router.navigate(["editar"]);
  }

  Eliminar(tipos:Tipo){
    this.service.deleteTipo(tipos)
    .subscribe(data=>{
      this.tipos=this.tipos.filter(p=>p!==tipos);
      alert("Usuario eliminado...");
    })
  }

}
