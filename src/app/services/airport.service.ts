import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  private apiUrl = 'https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=delhi&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL';
  private apiToken = 'OQbODfZ7iq7kQgGUsUw3frhascUI';
  private apiAirpot = 'https://test.api.amadeus.com/v1/reference-data/locations/airports?latitude=20.5937&longitude=78.9629&radius=500&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=relevance';
  private apiAirportToken = 'IFLMsKeVRqPAU4SqQC0Z5aM4hQH8'
//   private apiFlightSearch = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${from}&destinationLocationCode=${to}&departureDate=${depDate}&adults=1&nonStop=false&max=250`;
  private apiFlightToken = '4do6IBc3RPOwz7hbuX2eHnzNwVny'
  constructor(private http: HttpClient) { }

  getAirports(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiToken}`
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
  getAirportsNear(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiAirportToken}`
    });

    return this.http.get<any>(this.apiAirpot, { headers });
  }
  getFlights(from: any , to: any, depDate: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiFlightToken}`
    });

    return this.http.get<any>( `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${from}&destinationLocationCode=${to}&departureDate=${depDate}&adults=1&nonStop=false&max=250`, { headers });
  }
}
