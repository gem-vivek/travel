import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private apiUrl = 'https://test.api.amadeus.com/v1/shopping/activities?latitude=25.2048&longitude=55.2708&radius=1'; 
  private apiToken = 'YS22fSvY73jBitcu6Gqq9FfTkUGg'; // Replace with your actual API token
  private apiSearch = 'https://test.api.amadeus.com/v1/shopping/activities?latitude=25.2048&longitude=55.2708&radius=10000';
  private apiSearchToken = '3xg2fovm36IU7qoGqx4xD2ZQWd8p'
  constructor(private http: HttpClient) { }

  getDestinationPlaces(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiToken}`
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
  getDestinationPlacesSearch(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiSearchToken}`
    });

    return this.http.get<any>(this.apiSearch, { headers });
  }
}
