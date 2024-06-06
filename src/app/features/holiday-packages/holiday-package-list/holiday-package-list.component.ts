import { Component, Input, OnInit } from '@angular/core';
import { HolidayPackagesService } from '../holiday-packages.service';

@Component({
  selector: 'app-holiday-package-list',
  templateUrl: './holiday-package-list.component.html',
  styleUrls: ['./holiday-package-list.component.scss']
})
export class HolidayPackageListComponent implements OnInit {
  // packages = [];
  @Input() packages: any[] = [];

  constructor(private packagesService: HolidayPackagesService) {}

  ngOnInit(): void {
    this.packagesService.searchPackages({ /* criteria */ }).subscribe(
      (data) => this.packages = data.results,
      (error) => console.error(error)
    );
  }
}
