import { Component, Input, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {
  @Input() flights: any[] = [];

  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {
    this.flightsService.searchFlights({}).subscribe(
      (data) => this.flights = data.data,
      (error) => console.error(error)
    );
  }
}
