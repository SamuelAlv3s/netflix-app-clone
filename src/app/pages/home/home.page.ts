import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import homeData from '../../../assets/data/home.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {
  sections = homeData.sections;
  spotlight = homeData.spotlight;

  config = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    freeMode: true,
  };
  constructor() {}

  ngOnInit() {}

  async openCategories() {}

  openInfo(series) {}
}
