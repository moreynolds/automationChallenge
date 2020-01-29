import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCapitalsComponent } from './country-capitals.component';

describe('CountryCapitalsComponent', () => {
  let component: CountryCapitalsComponent;
  let fixture: ComponentFixture<CountryCapitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCapitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCapitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
