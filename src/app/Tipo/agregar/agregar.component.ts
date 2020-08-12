import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Tipo } from 'src/app/Modelo/Tipo';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  tipo:Tipo=new Tipo();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  Guardar(){
    this.service.createTipo(this.tipo)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listar"]);
    })}
}
