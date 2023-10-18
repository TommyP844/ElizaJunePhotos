import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPageMobileComponent } from './portfolio-page-mobile.component';

describe('PortfolioPageMobileComponent', () => {
  let component: PortfolioPageMobileComponent;
  let fixture: ComponentFixture<PortfolioPageMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioPageMobileComponent]
    });
    fixture = TestBed.createComponent(PortfolioPageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
