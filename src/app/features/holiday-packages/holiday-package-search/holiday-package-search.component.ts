import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HolidayPackagesService } from '../holiday-packages.service';
import { DestinationService } from 'src/app/services/destination.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holiday-package-search',
  templateUrl: './holiday-package-search.component.html',
  styleUrls: ['./holiday-package-search.component.scss']
})
export class HolidayPackageSearchComponent {
  searchForm: FormGroup;
  packages: any[] = [];
  destinations: any;

  constructor(private fb: FormBuilder, private holidayPackagesService: HolidayPackagesService,
    private destinationService: DestinationService,
    private router: Router) {
    this.searchForm = this.fb.group({
      destination: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit(): void {
    this.destinationService.getDestinationPlaces().subscribe(
      (data) => {
        this.destinations = data.data;
      },
      (error) => {
      }
    );
  }

  onSearch() {
    this.holidayPackagesService.searchPackages(this.searchForm.value).subscribe((data: any) => {
      this.packages = data;
    });
  }
  searchDestination(){
    if(this.searchForm.valid){
      this.router.navigate(['/activities-results'], { queryParams: this.searchForm.value });
    }
  }
  selectedActivity(event: any){
    this.searchForm.controls['destination'].patchValue(event.name)
  }
}

