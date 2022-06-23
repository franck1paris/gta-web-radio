import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBannerComponent } from './radio-banner.component';

describe('RadioBannerComponent', () => {
  let component: RadioBannerComponent;
  let fixture: ComponentFixture<RadioBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
