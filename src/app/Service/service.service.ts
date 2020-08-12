import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipo} from '../Modelo/Tipo';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //#region Declaracion Modelos
  tipo :Tipo[];
  ////#endregion

  constructor(private http:HttpClient) { }
//#region Declaracion de URL
  private tipoUrl='http://localhost:8080/tipo';
  //#endregion

  ////#region Tipo
  getTipo(){
    return this.http.get<Tipo[]>(this.tipoUrl +"/listar");
  }
  createTipo(tipo:Tipo){
    return this.http.post<Tipo>(this.tipoUrl,tipo);
  }
  getTipoId(id:number){
    return this.http.get<Tipo>(this.tipoUrl+"/"+id);
  }
  updateTipo(tipo:Tipo){
    return this.http.put<Tipo>(this.tipoUrl+"/"+tipo.id,tipo);
  }
  deleteTipo(tipo:Tipo){
    return this.http.delete<Tipo>(this.tipoUrl+"/"+tipo.id);
  }
  ////#endregion
  
  
}
