import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightsService } from '../flights.service';
import { AirportService } from 'src/app/services/airport.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit{
  searchForm: FormGroup;
  flights: any[] = [];
  airports: any;
  today = moment(new Date()).format('YYYY-MM-DD');
  airportsNear: any;

  constructor(private fb: FormBuilder,
     private flightsService: FlightsService,
     private airportService: AirportService,
     private router: Router) {
    this.searchForm = this.fb.group({
      from: [''],
      to: [''],
      departureDate: [''],
      returnDate: ['']
    });
  }

  ngOnInit(): void {
    this.airportService.getAirports().subscribe(
      (data) => {
        this.airports = data;
      },
      (error) => {
      }
    );
    this.airportService.getAirportsNear().subscribe(
      (data) => {
        this.airportsNear = data.data;
      },
      (error) => {
      }
    );
    
    }
    selectedAirport(event: any){
      this.searchForm.controls['from'].patchValue(event.name)
    }
  onSearch() {
    this.flightsService.searchFlights(this.searchForm.value).subscribe((data: any) => {
      this.flights = data;
    });
  }
  
  searchFlight(){
    const data = this.searchForm.value
    const depDate = moment(data.departureDate).format("YYYY-MM-DD")
    this.searchForm.value.from =this.searchForm.value.from.toUpperCase()
    this.searchForm.value.to =this.searchForm.value.to.toUpperCase()
   if(this.searchForm.valid){
    
      this.router.navigate(['/flight-results'], { queryParams: this.searchForm.value });
    }
  }
}
