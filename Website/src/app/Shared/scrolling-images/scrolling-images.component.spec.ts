import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingImagesComponent } from './scrolling-images.component';

describe('ScrollingImagesComponent', () => {
  let component: ScrollingImagesComponent;
  let fixture: ComponentFixture<ScrollingImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollingImagesComponent]
    });
    fixture = TestBed.createComponent(ScrollingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
