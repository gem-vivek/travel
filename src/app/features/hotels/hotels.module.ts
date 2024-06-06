import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelsRoutingModule } from './hotels-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HotelSearchResultsComponent } from './hotel-search-results/hotel-search-results.component';
import { HotelPaymentComponent } from './hotel-payment/hotel-payment.component';

@NgModule({
  declarations: [
    HotelSearchComponent,
    HotelListComponent,
    HotelSearchResultsComponent,
    HotelPaymentComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ]
})
export class HotelsModule { }
