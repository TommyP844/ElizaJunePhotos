import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPageMobileComponent } from './services-page-mobile.component';

describe('ServicesPageMobileComponent', () => {
  let component: ServicesPageMobileComponent;
  let fixture: ComponentFixture<ServicesPageMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesPageMobileComponent]
    });
    fixture = TestBed.createComponent(ServicesPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
