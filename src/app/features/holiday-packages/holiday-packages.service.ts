import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidayPackagesService {
  private apiUrl = 'https://api.example.com/holiday-packages';

  constructor(private http: HttpClient) {}

  searchPackages(criteria: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/search`, criteria);
  }

  getPackages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
