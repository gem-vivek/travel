import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotelsService } from '../hotels.service';
import { HotelService } from 'src/app/services/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})
export class HotelSearchComponent {
  searchForm: FormGroup;
  hotelList: any[] = [];
  hotelDetails:any[] =[]
  hotels:any[] = []
  constructor(private fb: FormBuilder, private hotelsService: HotelsService,
    private router: Router,
    private hotelService: HotelService) {
    this.searchForm = this.fb.group({
      destination: [''],
      checkInDate: [''],
      checkOutDate: ['']
    });
  }
    ngOnInit(): void {
      let max = 6
      this.hotelService.getLuxuryHotels().subscribe(
        (data) => {
          this.hotelList = data.data;
          let successfulFetches = 0;
          let i = 0;
      
          const fetchHotelDetails = () => {
            if (successfulFetches < 6 && i < this.hotelList.length) {
              this.hotelService.getHotelByID(this.hotelList[i].hotelId).subscribe(
                (resp: any) => {
                  if (!resp.errors) {
                    this.hotelDetails.push(resp);
                    successfulFetches++;
                  }
                  i++;
                  fetchHotelDetails();
                },
                (error) => {
                  i++;
                  fetchHotelDetails();
                }
              );
            } else {
            }
          };
      
          fetchHotelDetails();
        },
        (error) => {
          console.error('Error fetching hotelList:', error);
        }
      );
      
    }

  onSearch() {
    this.hotelsService.searchHotels(this.searchForm.value).subscribe((data: any) => {
      this.hotels = data;
    });
    this.hotelList = [
      { name: 'Hotel 1', description: 'Description for Hotel 1' },
      { name: 'Hotel 2', description: 'Description for Hotel 2' }
    ];
  }

  selectedHotel(event: any){
this.searchForm.controls['destination'].patchValue(event)
  }

  SearchHotels(){
    if(this.searchForm.valid){
        this.router.navigate(['/hotel-search-results'], { queryParams: this.searchForm.value });
      }
  }

}