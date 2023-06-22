import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private URL = 'http://localhost:4500/catalogue'

  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    return this.http.get(this.URL);
  }
}
