import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HolidayPackageSearchComponent } from './holiday-package-search/holiday-package-search.component';
import { HolidayPackageListComponent } from './holiday-package-list/holiday-package-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HolidayPackagesResultComponent } from './holiday-packages-result/holiday-packages-result.component';
import { HolidayPaymentComponent } from './holiday-payment/holiday-payment.component';

@NgModule({
  declarations: [
    HolidayPackageSearchComponent,
    HolidayPackageListComponent,
    HolidayPackagesResultComponent,
    HolidayPaymentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  // exports: [
  //   HolidayPackageSearchComponent,
  //   HolidayPackageListComponent
  // ]
})
export class HolidayPackagesModule { }
