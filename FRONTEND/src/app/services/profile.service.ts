import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private URL = 'http://localhost:8080/data/hello';
  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get<any>(this.URL);
  }
}
