import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
isInside :any 
  constructor(private router: Router,private location: Location) {
    this.isInside = sessionStorage.getItem('inside');
   }

  ngOnInit(): void {
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
