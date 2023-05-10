import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelectComponent } from './country-select.component';

describe('CountrySelectComponent', () => {
  let component: CountrySelectComponent;
  let fixture: ComponentFixture<CountrySelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountrySelectComponent]
    });
    fixture = TestBed.createComponent(CountrySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
