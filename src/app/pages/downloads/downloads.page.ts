import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import downloadsData from '../../../assets/data/downloads.json';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.page.html',
  styleUrls: ['./downloads.page.scss'],
})
export class DownloadsPage implements OnInit {
  @ViewChildren(IonItemSliding) items: QueryList<IonItemSliding>;
  downloads = downloadsData;
  edit = false;

  constructor() {}

  ngOnInit() {}

  toggleEdit() {
    this.edit = !this.edit;
    this.items.forEach((item) => {
      if (this.edit) {
        item.open('end');
      } else {
        item.close();
      }
    });
  }

  removeItem(item) {
    this.downloads = this.downloads.filter((elem) => elem.id !== item.id);
  }
}
