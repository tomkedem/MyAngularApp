import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface City {
  id: number;
  name: string;
  countryId: number;
}

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.css']
})
export class CitySelectComponent implements OnInit {
  @Input() countryId: number | undefined;
  cities: City[] = [];
  selectedCityId: number | undefined;

  @Output() citySelected = new EventEmitter<City>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['countryId'] && this.countryId !== undefined) {
      this.http
        .get<City[]>(`https://localhost:7227/Country/${this.countryId}/cities`)
        .subscribe((data) => {
          this.cities = data;
        });
    }
  }
  onCityChange() {
    const selectedCity = this.cities.find(city => city.id === this.selectedCityId);
    this.citySelected.emit(selectedCity);
  }

  
}
