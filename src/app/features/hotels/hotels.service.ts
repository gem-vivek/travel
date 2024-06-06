import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private apiUrl = 'https://api.example.com/hotels';

  constructor(private http: HttpClient) {}

  searchHotels(criteria: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/search`, criteria);
  }

  getHotels(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
