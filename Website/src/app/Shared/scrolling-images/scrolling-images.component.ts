import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/Services/global.service';

@Component({
  selector: 'app-scrolling-images',
  templateUrl: './scrolling-images.component.html',
  styleUrls: ['./scrolling-images.component.scss']
})
export class ScrollingImagesComponent {
  @ViewChild('scroll') scrollBar: ElementRef | undefined;

  images: string[] = [];
  direction: number = -1;

  constructor(private apiService: GlobalService) {
      
  }

  ngOnInit() {
    this.apiService.getScrollImages().subscribe(data => {
      const shuffle = ([...arr]) => {
        let m = arr.length;
        while (m) {
          const i = Math.floor(Math.random() * m--);
          [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
      };

      this.images = shuffle(data);
    });
      
      const intervalTime = 3000;   

      var scrollLambda = (element: any) => {
        const currentScrollTop = element.scrollTop;
        const maxScrollTop = element.scrollHeight - element.clientHeight;
        
        // Calculate a random distance to scroll
        const scrollDistance = Math.floor(Math.random() * 600) + 200; // Adjust as needed
        
        // Calculate the new scroll position based on direction
        let newScrollTop = currentScrollTop + scrollDistance * this.direction;
        
        // Switch direction if the new position is at the top or bottom
        if (newScrollTop < 0) {
          newScrollTop = 0;
          this.direction = 1; // Change direction to scroll down
        } else if (newScrollTop > maxScrollTop) {
          newScrollTop = maxScrollTop;
          this.direction = -1; // Change direction to scroll up
        } else {
          if(Math.random() > 0.8) { // flip direction with a 1 in 5 chance
            this.direction *= -1;
          }
        }
      
        // Call the scroll function to smoothly scroll to the new position
        this.scrollSmoothly(element, currentScrollTop, newScrollTop, 1300);
      };


      setTimeout(
        () => { scrollLambda(this.scrollBar?.nativeElement) },
        Math.floor(Math.random() * 250) + 250
      );

      setTimeout(
        () => { setInterval(scrollLambda, intervalTime, this.scrollBar?.nativeElement); },
        Math.floor(Math.random() * 1000) + 1000
      );
  }

  // Function to perform a smooth scroll animation
  scrollSmoothly(element: any, start: number, end: number, duration: number) {
    const startTime = Date.now();

    const scroll = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed < duration) {
        const easing = this.easeInOutCubic(elapsed, start, end - start, duration);
        element.scrollTop = easing;
        requestAnimationFrame(scroll);
      } else {
        element.scrollTop = end;
      }
    };

    requestAnimationFrame(scroll);
  }

  easeInOutCubic(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
}
