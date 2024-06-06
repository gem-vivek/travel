import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayPaymentComponent } from './holiday-payment.component';

describe('HolidayPaymentComponent', () => {
  let component: HolidayPaymentComponent;
  let fixture: ComponentFixture<HolidayPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
