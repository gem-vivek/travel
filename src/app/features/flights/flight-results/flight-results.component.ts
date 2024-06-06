import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AirportService } from 'src/app/services/airport.service';
import * as moment from 'moment';


@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.scss']
})
export class FlightResultsComponent implements OnInit {
  flights: any[] = [];
  searchCriteria: any;
  citySelected: any
  citYTo:any
  constructor(private route: ActivatedRoute, private http: HttpClient,
    private airportService: AirportService, private router: Router
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchCriteria = params;
      this.searchFlights();
    });
  }

  searchFlights() {
    const depDate = moment(this.searchCriteria.departureDate).format("YYYY-MM-DD")
    this.airportService.getAirportsNear().subscribe((res)=>{
      this.citySelected = res.data.filter((pkg: any) => pkg.name.toLowerCase().includes(this.searchCriteria.from.toLowerCase()) || pkg.detailedName.toLowerCase().includes(this.searchCriteria.from.toLowerCase()));
      this.citYTo =res.data.filter((pkg: any) => pkg.name.toLowerCase().includes(this.searchCriteria.to.toLowerCase()) ||  pkg.detailedName.toLowerCase().includes(this.searchCriteria.to.toLowerCase()));
    this.airportService.getFlights(this.citySelected[0].iataCode ,this.citYTo[0].iataCode,depDate).subscribe((ele)=>{
      this.flights = ele.data
    })
    })
    
  }
  onBookFlight(flight: any) {
    this.router.navigate(['/payment'], { state: { flight } });
  }
}
