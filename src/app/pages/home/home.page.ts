import {
  AfterContentChecked,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SwiperComponent } from 'swiper/angular';
import homeData from '../../../assets/data/home.json';
import {
  modalEnterAnimation,
  modalLeaveAnimation,
} from '../../modal-animation';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit, AfterContentChecked {
  @ViewChildren('swiper') swiperList: QueryList<SwiperComponent>;
  sections = homeData.sections;
  spotlight = homeData.spotlight;

  config = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    freeMode: true,
  };
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  ngAfterContentChecked() {
    if (this.swiperList) {
      this.swiperList.forEach((swiper) => {
        swiper.updateSwiper({});
      });
    }
  }

  async openCategories() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'transparent-modal',
      enterAnimation: modalEnterAnimation,
      leaveAnimation: modalLeaveAnimation,
    });
    await modal.present();
  }

  openInfo(series) {}
}
