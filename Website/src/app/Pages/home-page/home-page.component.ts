import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('leftScroll') leftScrollBar: ElementRef | undefined;
  @ViewChild('rightScroll') rightScrollBar: ElementRef | undefined;

  leftScrolldir: DirRef = new DirRef();
  rightScrolldir: DirRef = new DirRef();

  imagesLeft: string[] = [];
  imagesRight: string[] = [];

  constructor(private http: HttpClient) {
      
  }

  ngOnInit() {
    this.http.get<string[]>('http://127.0.0.1:3000/api/images').subscribe(data => {
        let half = data.length / 2
        this.imagesLeft = data.slice(0, half);//.sort((a: string, b: string) => { return Math.random() - 0.5; });
        this.imagesRight = data.slice(half);//.sort((a: string, b: string) => { return Math.random() - 0.5; });

        const shuffle = ([...arr]) => {
          let m = arr.length;
          while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
          }
          return arr;
        };

        this.imagesLeft = shuffle(this.imagesLeft);
        this.imagesRight = shuffle(this.imagesRight);
        

        console.log(data);
      });
      
      this.leftScrolldir.direction = 1;
      this.rightScrolldir.direction = 1;

      const intervalTime = 3000;   

      var scrollLambda = (element: any, direction: DirRef) => {
        const currentScrollTop = element.scrollTop;
        const maxScrollTop = element.scrollHeight - element.clientHeight;
        
        // Calculate a random distance to scroll
        const scrollDistance = Math.floor(Math.random() * 600) + 200; // Adjust as needed
        
        // Calculate the new scroll position based on direction
        let newScrollTop = currentScrollTop + scrollDistance * direction.direction;
        
        // Switch direction if the new position is at the top or bottom
        if (newScrollTop < 0) {
          newScrollTop = 0;
          direction.direction = 1; // Change direction to scroll down
        } else if (newScrollTop > maxScrollTop) {
          newScrollTop = maxScrollTop;
          direction.direction = -1; // Change direction to scroll up
        } else {
          if(Math.random() > 0.8) { // flip direction with a 1 in 5 chance
            direction.direction *= -1;
          }
        }
      
        // Call the scroll function to smoothly scroll to the new position
        HomePageComponent.scrollSmoothly(element, currentScrollTop, newScrollTop, 1300);
      };


      setTimeout(
        () => { scrollLambda(this.leftScrollBar?.nativeElement, this.leftScrolldir) },
        Math.floor(Math.random() * 250) + 250
      );

      setTimeout(
        () => { scrollLambda(this.rightScrollBar?.nativeElement, this.rightScrolldir) },
        Math.floor(Math.random() * 250) + 250
      );

      setTimeout(
        () => { setInterval(scrollLambda, intervalTime, this.rightScrollBar?.nativeElement, this.rightScrolldir); },
        Math.floor(Math.random() * 1000) + 1000
      );

      setTimeout(
        () => { setInterval(scrollLambda, intervalTime, this.leftScrollBar?.nativeElement, this.leftScrolldir); },
        Math.floor(Math.random() * 1000) + 1000
      );
  }

  // Function to perform a smooth scroll animation
  static scrollSmoothly(element: any, start: number, end: number, duration: number) {
    const startTime = Date.now();

    const scroll = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed < duration) {
        const easing = HomePageComponent.easeInOutCubic(elapsed, start, end - start, duration);
        element.scrollTop = easing;
        requestAnimationFrame(scroll);
      } else {
        element.scrollTop = end;
      }
    };

    requestAnimationFrame(scroll);
  }

  static easeInOutCubic(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
}
