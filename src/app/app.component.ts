import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-booking';
  constructor(private Location:Location){
    if(this.Location.path() =='/login' || this.Location.path() =='/signup'){
      sessionStorage.removeItem('inside');
    }
  }
}
