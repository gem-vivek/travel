import { Component, Input, OnInit } from '@angular/core';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  // hotels = [];
  @Input() hotels: any[] = [];

  constructor(private hotelsService: HotelsService) {}

  ngOnInit(): void {
    this.hotelsService.searchHotels({ /* criteria */ }).subscribe(
      (data) => this.hotels = data.suggestions,
      (error) => console.error(error)
    );
  }
}

