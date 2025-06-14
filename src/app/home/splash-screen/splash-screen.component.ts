import { Component, OnInit } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  standalone: false
})
export class SplashScreenComponent  implements OnInit {

  opacity: number = 0;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.opacity = 1;
    }, 200);
  }

}
