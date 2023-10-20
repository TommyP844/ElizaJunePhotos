import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  getScrollImages(): Observable<string[]> {
    return this.http.get<string[]>('http://127.0.0.1:3000/api/images');
  }
}
