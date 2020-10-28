import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  fondo_base:string;
  encabezado_base:string;
  pie_base:string;
  fuente_base:string;

  clientes: Observable<any>;

  constructor(private dataService:DataService,public alertControl: AlertController) {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base=localStorage.getItem('encabezado');
    this.pie_base=localStorage.getItem('pie');
    this.fuente_base=localStorage.getItem('fuente');
  }

  ngOnInit(){
    this.clientes=this.dataService.getUsuarios();
  }

  async presentAlert(nombres,correo,direccion,telefono,imagen) {
    const alert = await this.alertControl.create({
      cssClass: 'alerta',
      header: nombres,
      subHeader: direccion,
      message: `<ion-img src="${imagen}"></ion-img><h2><ion-icon name="call-outline"></ion-icon> Teléfono: </h2><h5>${telefono}</h5><h2><ion-icon name="mail-outline"></ion-icon> Email: </h2><h5>${correo}</h5>`,
      buttons: ['OK']
    });

    await alert.present();
  }

}
