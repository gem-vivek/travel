import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { FlightSearchComponent } from './features/flights/flight-search/flight-search.component';
import { HotelSearchComponent } from './features/hotels/hotel-search/hotel-search.component';
import { HolidayPackageSearchComponent } from './features/holiday-packages/holiday-package-search/holiday-package-search.component';
import { AuthGuard } from './auth/auth.guard'; 
import { FlightResultsComponent } from './features/flights/flight-results/flight-results.component';
import { PaymentComponent } from './features/payments/payment/payment.component';
import { HolidayPackagesResultComponent } from './features/holiday-packages/holiday-packages-result/holiday-packages-result.component';
import { HotelSearchResultsComponent } from './features/hotels/hotel-search-results/hotel-search-results.component';
import { HolidayPaymentComponent } from './features/holiday-packages/holiday-payment/holiday-payment.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HotelPaymentComponent } from './features/hotels/hotel-payment/hotel-payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'flights', component: FlightSearchComponent },
  
  { path: 'flight-results', component: FlightResultsComponent },
  { path: 'activities-results', component: HolidayPackagesResultComponent },
  { path: 'hotel-payment', component: HotelPaymentComponent },
  { path: 'hotel-search-results', component: HotelSearchResultsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'holiday-payment', component: HolidayPaymentComponent},
  { path: 'hotels', component: HotelSearchComponent },
  { path: 'holiday-packages', component: HolidayPackageSearchComponent },
  { path: '**', redirectTo: 'login' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
