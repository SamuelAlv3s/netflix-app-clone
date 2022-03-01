import {
  AfterContentChecked,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { IonRow } from '@ionic/angular';
import soonData from '../../../assets/data/soon.json';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.page.html',
  styleUrls: ['./coming-soon.page.scss'],
})
export class ComingSoonPage implements OnInit, AfterContentChecked {
  @ViewChildren(IonRow, { read: ElementRef }) rows: QueryList<ElementRef>;
  @ViewChildren('player') videoPlayers: QueryList<any>;
  soon = soonData;
  currentPlaying: HTMLVideoElement = null;
  activeBlock = 0;

  constructor() {}

  ngOnInit() {}

  ngAfterContentChecked() {
    if (this.rows && this.videoPlayers) {
      this.contentScrolled(null);
    }
  }

  contentScrolled(ev) {
    if (this.currentPlaying && this.isElementInViewport(this.currentPlaying)) {
      return;
    } else if (
      this.currentPlaying &&
      !this.isElementInViewport(this.currentPlaying)
    ) {
      // Item is out of view, pause it
      this.currentPlaying.pause();
      this.currentPlaying = null;
    }
    this.videoPlayers.forEach((player, index) => {
      if (this.currentPlaying) {
        // Skip all further players, we are already playing
        return;
      }
      // Check if the element is in our view
      const nativeElement = player.nativeElement;
      const inView = this.isElementInViewport(nativeElement);
      // Start autoplay if it's in the view
      if (inView) {
        this.activeBlock = index;
        this.currentPlaying = nativeElement;
        this.currentPlaying.muted = true;
        this.currentPlaying.play();
        return;
      }
    });
  }

  // Check if the element is visible in the view
  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= -100 && // Adding a little offset because of the toolbar
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
