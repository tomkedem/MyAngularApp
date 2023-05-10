import { Component } from '@angular/core';

interface Country {
  id: number;
  name: string;
}

interface City {
  id: number;
  name: string;
  countryId: number;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  selectedCountry: Country | undefined;
  selectedCity: City | undefined;

  onCountrySelected(country: Country) {
    this.selectedCountry = country;
  }

  onCitySelected(city: City) {
    this.selectedCity = city;
  }
}
