import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightsRoutingModule } from './flights-routing.module';
import { FlightListComponent } from './flight-list/flight-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightResultsComponent } from './flight-results/flight-results.component';

@NgModule({
  declarations: [FlightSearchComponent,
    FlightListComponent,
    FlightResultsComponent],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    FlightsRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCardModule
  ],
  
})
export class FlightsModule { }
