import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';

class DirRef {
  direction: number = 1;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  @ViewChild('name') name: ElementRef<HTMLParagraphElement> | undefined;
  @ViewChild('bio') bio: ElementRef<HTMLParagraphElement> | undefined;

  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolle
    if(this.name) {
      const rect = this.name.nativeElement.getBoundingClientRect();
      const topShown = rect.bottom >= 0;
      const bottomShown = rect.top <= window.innerHeight;
      const visible = topShown && bottomShown;

      if(visible) {
      this.name.nativeElement.className = 'name-header visible';
      } else {
        this.name.nativeElement.className = 'name-header';
      }
    }

    if(this.bio) {
      const rect = this.bio.nativeElement.getBoundingClientRect();
      const topShown = rect.bottom >= 0;
      const bottomShown = rect.top <= window.innerHeight;
      const visible = topShown && bottomShown;

      if(visible) {
        this.bio.nativeElement.className = 'bio bio-visible';
      } else {
        this.bio.nativeElement.className = 'bio';
      }
    }

  }
}
