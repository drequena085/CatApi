import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Breed } from 'src/app/models/breed';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss'],
  standalone: false
})
export class CatDetailComponent  implements OnInit {

  @Input() gato!: Breed;
  @ViewChild('imagenContainer') imagenRef!: ElementRef;
  alturaTexto: string = 'auto';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    setTimeout(() => this.ajustarAltura(), 50);
  }

  ajustarAltura() {
    if (this.imagenRef?.nativeElement) {
      const alturaImg = this.imagenRef.nativeElement.offsetHeight;
      this.alturaTexto = `calc(100vh - ${alturaImg+200}px)`;
    }
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  verWikipedia() {
    window.open(this.gato.wikipedia_url, '_blank');
  }
}
