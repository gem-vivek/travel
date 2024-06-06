import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private apiUrl = 'https://api.example.com/flights';

  constructor(private http: HttpClient) {}

  searchFlights(criteria: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/search`, criteria);
  }

  getFlights(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
