import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageMobileComponent } from './home-page-mobile.component';

describe('HomePageMobileComponent', () => {
  let component: HomePageMobileComponent;
  let fixture: ComponentFixture<HomePageMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageMobileComponent]
    });
    fixture = TestBed.createComponent(HomePageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
