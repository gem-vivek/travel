import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-search-results',
  templateUrl: './hotel-search-results.component.html',
  styleUrls: ['./hotel-search-results.component.scss']
})
export class HotelSearchResultsComponent {
  hotelsList: any[] = [];
  searchCriteria: any;
  hotelDetailsList:any[] =[]
  constructor(private route: ActivatedRoute, private http: HttpClient,
    private hotelService: HotelService, private router: Router
    ) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchCriteria = params;
      this.searchHotels();
    });
  }

  onBookHotel(hotel: any) {
    this.router.navigate(['/hotel-payment'], { state: { bookingDetails: hotel } });
  }

  searchHotels() {
    this.hotelService.getLuxuryHotels().subscribe((ele)=>{
      this.hotelsList = ele.data.filter((pkg: any) =>  pkg.name.toLowerCase().includes(this.searchCriteria.destination.toLowerCase()));
      for(let i = 0 ; i<this.hotelsList.length;i++ ){
              this.hotelService.getHotelByID(this.hotelsList[i].hotelId).subscribe(
                (resp: any) => {
                  this.hotelDetailsList.push(resp);
                },
                (error) => {
                }
              );
              }
        },
        (error) => {
          console.error('Error fetching hotelList:', error);
        }
      );
  }
}
