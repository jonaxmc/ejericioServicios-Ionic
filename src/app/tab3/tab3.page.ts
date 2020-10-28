import { Component } from '@angular/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {
  temas=[
    {
      nombre:'Claro',
      color_fondo:'',
      color_encabezado:'success',
      color_footer:'success',
      fuente:'fuente1'
    },
    {
      nombre:'Oscuro',
      color_fondo:'dark',
      color_encabezado:'encabezadoDark',
      color_footer:'encabezadoDark',
      fuente:'fuente1'
    },
    {
      nombre:'Azul',
      color_fondo:'fondoAzul',
      color_encabezado:'encabezadoAzul',
      color_footer:'encabezadoAzul',
      fuente:'fuente1'
    },
    {
      nombre:'Rojo',
      color_fondo:'fondoRojo',
      color_encabezado:'encabezadoRojo',
      color_footer:'encabezadoRojo',
      fuente:'fuente1'
    }
  ]

  aux:any;

  fondo_base:string;
  encabezado_base:string;
  pie_base:string;
  fuente_base:string;
  fondo:string;
  encabezado:string;
  pie:string;
  fuente:string;


  constructor() {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base=localStorage.getItem('encabezado');
    this.pie_base=localStorage.getItem('pie');
    this.fuente_base=localStorage.getItem('fuente');
   }

   elegirTema(){
    this.fondo=this.aux.color_fondo;
    this.encabezado=this.aux.color_encabezado;
    this.pie=this.aux.color_footer;
    this.fuente=this.aux.fuente;

   }
   almacenar(){
    localStorage.setItem('fondo',this.aux.color_fondo);
    localStorage.setItem('encabezado',this.aux.color_encabezado);
    localStorage.setItem('pie',this.aux.color_footer);
    localStorage.setItem('fuente',this.aux.fuente);
    
   }
  

   
   ngOnInit() {
  }

  


}
