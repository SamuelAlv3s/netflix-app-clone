import { Component, OnInit } from '@angular/core';
import detailData from '../../../assets/data/detail.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  details = detailData;

  constructor() {}

  ngOnInit() {}
}
