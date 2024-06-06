import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiUrl = 'https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=DEL&radius=100&radiusUnit=KM&hotelSource=ALL';
  private apiToken = '6D8lEApMEImFDTjAGUgEtNX4n9Mt'; // Replace with your actual API token
//   private apiHotelSearch =  `https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=${hoteId}&adults=1&checkInDate=2024-06-22&roomQuantity=1&paymentPolicy=NONE&bestRateOnly=true`;
  private apiTokenHotelID  = 'XybMGgmihrEUTRrVZVt15SAerUqB';  
constructor(private http: HttpClient) { }

  getLuxuryHotels(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiToken}`
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }

  getHotelByID(hoteId:any){
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.apiTokenHotelID}`
      });
  
      return this.http.get(`https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=${hoteId}&adults=1&checkInDate=2024-06-22&roomQuantity=1&paymentPolicy=NONE&bestRateOnly=true`, { headers });
  }
}
