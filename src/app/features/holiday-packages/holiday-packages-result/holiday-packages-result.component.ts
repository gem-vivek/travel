import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HolidayPackagesService } from '../holiday-packages.service';
import { DestinationService } from 'src/app/services/destination.service';
import { HolidayPackageSearchComponent } from '../holiday-package-search/holiday-package-search.component';

@Component({
  selector: 'app-holiday-packages-result',
  templateUrl: './holiday-packages-result.component.html',
  styleUrls: ['./holiday-packages-result.component.scss']
})
export class HolidayPackagesResultComponent {
  activites: any[] = [];
  searchCriteria: any;
  constructor(private route: ActivatedRoute, private http: HttpClient,
    private destinationService: DestinationService, private router: Router,
    ) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchCriteria = params;
      this.searchActivites();
    });
    
  }
  searchActivites() {
    this.destinationService.getDestinationPlacesSearch().subscribe((ele)=>{
      this.activites = ele.data.filter((pkg: any) =>  pkg.name.toLowerCase().includes(this.searchCriteria.destination.toLowerCase()));
    })
  }
  onBookactivite(activity: any) {
    const data = {
      activityName: activity.name,
      activityprice : activity.price
    }
    this.router.navigate(['/holiday-payment'], { queryParams: data });
  }
}

