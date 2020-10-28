import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  fondo_base:string;
  encabezado_base:string;
  pie_base:string;
  fuente_base:string;

  informacion={
    nombres:'',
    cedula:'',
    email:'',
    direccion:'',
    telefono:''
  }

  constructor() {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base=localStorage.getItem('encabezado');
    this.pie_base=localStorage.getItem('pie');
    this.fuente_base=localStorage.getItem('fuente');
  }

  registroDatos(){
    console.log(this.informacion);
  }

}
