import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayPackageSearchComponent } from './holiday-package-search/holiday-package-search.component';

const routes: Routes = [
  { path: '', component: HolidayPackageSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayPackagesRoutingModule { }
