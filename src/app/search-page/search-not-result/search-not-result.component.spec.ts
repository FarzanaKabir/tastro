import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNotResultComponent } from './search-not-result.component';

describe('SearchNotResultComponent', () => {
  let component: SearchNotResultComponent;
  let fixture: ComponentFixture<SearchNotResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNotResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNotResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
