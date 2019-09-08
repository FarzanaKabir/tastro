import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOurCitiesComponent } from './find-our-cities.component';

describe('FindOurCitiesComponent', () => {
  let component: FindOurCitiesComponent;
  let fixture: ComponentFixture<FindOurCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindOurCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOurCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
