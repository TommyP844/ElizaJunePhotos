import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _router: Router)
  {

  }

  redirect(page: string): void {
    switch(page)
    {
      case 'home': this._router.navigate(['/home']); break;
      case 'services': this._router.navigate(['/services']); break;
      case 'booking': this._router.navigate(['/booking']); break;
      case 'portfolio': this._router.navigate(['/portfolio']); break;
      default: this._router.navigate(['/home']); break;
    }
  }
}
