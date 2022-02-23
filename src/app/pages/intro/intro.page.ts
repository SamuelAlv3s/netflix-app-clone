import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import Swiper, { Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

Swiper.use([Pagination]);

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IntroPage implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;
  @ViewChild('bg') background: ElementRef;

  config: SwiperOptions = {
    pagination: true,
  };

  pages = [
    {
      title: 'Watch on any device',
      text: 'Stream on your phone, tablet, laptop, and TV without paying more.',
      img: './assets/img/intro2.png',
    },
    {
      title: '3, 2, 1... Download!',
      text: 'Always have something to watch offline.',
      img: './assets/img/intro3.png',
    },
    {
      title: 'No pesky contracts',
      text: 'Cancel anytime.',
      img: './assets/img/intro4.png',
    },
  ];
  constructor(public renderer: Renderer2) {}

  ngOnInit() {
    StatusBar.setStyle({ style: Style.Dark });
  }
}
