import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastroForBusinessComponent } from './tastro-for-business.component';

describe('TastroForBusinessComponent', () => {
  let component: TastroForBusinessComponent;
  let fixture: ComponentFixture<TastroForBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastroForBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastroForBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
