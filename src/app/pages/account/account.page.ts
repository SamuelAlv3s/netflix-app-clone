import { Component, OnInit } from '@angular/core';
import packageInfo from '../../../../package.json';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  appVersion = packageInfo.version;

  accounts = [
    {
      name: 'Samuel',
      img: './assets/data/profile-1.png',
    },
    {
      name: 'Moon',
      img: './assets/data/profile-2.png',
    },
    {
      name: 'Alcina',
      img: './assets/data/profile-3.png',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
