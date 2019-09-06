import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayingAboutUsComponent } from './saying-about-us.component';

describe('SayingAboutUsComponent', () => {
  let component: SayingAboutUsComponent;
  let fixture: ComponentFixture<SayingAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayingAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayingAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
