import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import searchData from '../../../assets/data/search.json';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('searchinput', { read: ElementRef }) searchInput: ElementRef;
  searchData = searchData;
  search = '';
  searching = false;

  constructor() {}

  ngOnInit() {
    this.filterResults();
  }

  blurSearch() {
    if (this.searchInput) {
      this.searchInput.nativeElement.blur();
      this.searching = false;
      Keyboard.hide();
    }
  }

  filterResults() {
    const searchValue = this.search.toLowerCase();
    this.searchData = searchData.filter(
      (elem) => elem.title.toLowerCase().indexOf(searchValue) >= 0
    );
  }
}
