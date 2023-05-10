import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySelectComponent } from './city-select.component';

describe('CitySelectComponent', () => {
  let component: CitySelectComponent;
  let fixture: ComponentFixture<CitySelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitySelectComponent]
    });
    fixture = TestBed.createComponent(CitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
