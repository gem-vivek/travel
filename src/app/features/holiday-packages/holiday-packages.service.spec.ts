import { TestBed } from '@angular/core/testing';

import { HolidayPackagesService } from './holiday-packages.service';

describe('HolidayPackagesService', () => {
  let service: HolidayPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidayPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
