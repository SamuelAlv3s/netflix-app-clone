import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.page.html',
  styleUrls: ['./info-modal.page.scss'],
})
export class InfoModalPage implements OnInit {
  @Input() series: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  closeDrawer() {
    this.modalCtrl.dismiss();
  }
}
