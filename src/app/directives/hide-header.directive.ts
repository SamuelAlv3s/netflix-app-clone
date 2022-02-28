import {
  AfterViewInit,
  Directive,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]',
})
export class HideHeaderDirective implements AfterViewInit {
  @Input('appHideHeader') header: any;
  private headerHeight = 80;
  private children: any;

  constructor(private renderer: Renderer2, private domCtrl: DomController) {}

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    const scrollTop: number = $event.detail.scrollTop;

    if (scrollTop < 0) {
      return;
    }

    const newPosition = Math.max(-scrollTop / 2, -this.headerHeight);

    const newOpacity = 1 - newPosition / -this.headerHeight;

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.header, 'top', newPosition + 'px');
      for (const c of this.children) {
        this.renderer.setStyle(c, 'opacity', newOpacity);
      }
    });
  }

  ngAfterViewInit(): void {
    this.header = this.header.el;
    this.children = this.header.children;
  }
}
