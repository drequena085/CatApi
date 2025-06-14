import { Component, OnInit } from '@angular/core';
import { CatapiService } from '../services/catapi.service';
import { Breed } from '../models/breed';
import { AlertController, ModalController } from '@ionic/angular';
import { CatDetailComponent } from './cat-detail/cat-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  listaGatos: Breed[] = [];
  cargando: boolean = true;
  inputBusqueda: string = '';

  constructor(private catApi: CatapiService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {}


  ngOnInit(): void {
    this.catApi.listado().subscribe(res => {
      this.listaGatos = res;
      this.cargando = false;
    }, async (error) => {
      await this.mostrarAlerta('Ocurrió un error al cargar los gatos.');
      this.cargando = false;
    });
  }

  busqueda() {
    if (this.inputBusqueda) {
      this.cargando = true;
      this.catApi.buscar(this.inputBusqueda).subscribe(res => {
        this.listaGatos = res.slice(0, 50);
        this.cargando = false;
      }, async (error) => {
      await this.mostrarAlerta('Ocurrió un error al cargar los gatos.');
      });
    } else {
      this.cargando = true;
      this.ngOnInit();
    }
  }

  async verDetalle(gato: Breed) {
    const modal = await this.modalCtrl.create({
        component: CatDetailComponent,
        componentProps: {
          gato: gato
        }
      });
    await modal.present();
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

}
