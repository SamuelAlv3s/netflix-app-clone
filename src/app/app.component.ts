import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform, ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit(): void {
    this.platform.ready().then(() => {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    });
  }
}
