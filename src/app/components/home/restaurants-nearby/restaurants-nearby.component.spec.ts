import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsNearbyComponent } from './restaurants-nearby.component';

describe('RestaurantsNearbyComponent', () => {
  let component: RestaurantsNearbyComponent;
  let fixture: ComponentFixture<RestaurantsNearbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsNearbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
