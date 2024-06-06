import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FlightsModule } from './features/flights/flights.module';
import { HotelsModule } from './features/hotels/hotels.module';
import { HolidayPackagesModule } from './features/holiday-packages/holiday-packages.module';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './features/payments/payment/payment.component';
import { FooterComponent } from './core/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    FlightsModule,
    HotelsModule,
    HolidayPackagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
