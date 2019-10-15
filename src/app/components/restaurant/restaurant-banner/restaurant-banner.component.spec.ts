import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBannerComponent } from './restaurant-banner.component';

describe('RestaurantBannerComponent', () => {
  let component: RestaurantBannerComponent;
  let fixture: ComponentFixture<RestaurantBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
