import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayPackagesResultComponent } from './holiday-packages-result.component';

describe('HolidayPackagesResultComponent', () => {
  let component: HolidayPackagesResultComponent;
  let fixture: ComponentFixture<HolidayPackagesResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayPackagesResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayPackagesResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
