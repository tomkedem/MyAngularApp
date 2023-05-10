import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Country {
  id: number;
  name: string;
}
@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.css']
})
export class CountrySelectComponent implements OnInit {
  countries: any[] = [];
  selectedCountryId: number | undefined;
  
  @Output() countrySelected = new EventEmitter<Country>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://localhost:7227/Country').subscribe((data) => {
      this.countries = data;
    });
  }
  onCountryChange() {
    const selectedCountry = this.countries.find(country => country.id === this.selectedCountryId);
    this.countrySelected.emit(selectedCountry);
  }
}
