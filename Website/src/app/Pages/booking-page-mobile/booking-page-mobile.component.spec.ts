import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPageMobileComponent } from './booking-page-mobile.component';

describe('BookingPageMobileComponent', () => {
  let component: BookingPageMobileComponent;
  let fixture: ComponentFixture<BookingPageMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingPageMobileComponent]
    });
    fixture = TestBed.createComponent(BookingPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
