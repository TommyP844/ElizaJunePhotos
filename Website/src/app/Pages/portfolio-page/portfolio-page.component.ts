import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { find } from 'rxjs';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {

  images: any = new Map<string, string[]>();
  imageType: string = 'Weddings';
  selectedImage: string = '';

  constructor(private _http: HttpClient) {

  }

  ngOnInit(): void {
    this._http.get<Map<string, string[]>>('http://127.0.0.1:3000/api/portfolio').subscribe(data => {
      this.images = data;
      console.log(data);
      this.setImageType('Couples');
    });
  }

  setImageType(type: string): void {
      this.imageType = type;
      this.selectedImage = '/assets/Photos/Portfolio/' + this.imageType + '/' + this.images[this.imageType][0];
  }

  setSelected(type: string, name: string): void {
    this.selectedImage = '/assets/Photos/Portfolio/' + type + '/' + this.images[type].find((element: string) => element === name);
  }

}
