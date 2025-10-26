import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { CountryService } from '../../services/country.service';
import { DivisionService } from '../../services/division.service';
import { DistrictService } from '../../services/district.service';
import { PoliceStationService } from '../../services/police-station.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-address',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './add-address.html',
  styleUrl: './add-address.css',
})
export class AddAddress implements OnInit {

  countries: any[] = [];
  divisions: any[] = [];
  districts: any[] = [];
  policeStations: any[] = [];

  selectedCountry: number = 0;
  selectedDivision: number = 0;
  selectedDistrict: number = 0;
  selectedPoliceStation: number = 0;

  addressLine1: string = '';
  addressLine2: string = '';

  constructor(

    private addressService: AddressService,
    private countryService: CountryService,
    private divisionService: DivisionService,
    private districtService: DistrictService,
    private policeStationService: PoliceStationService,

    private cd: ChangeDetectorRef
  ) { }




  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.countryService.getAllCountry().subscribe(data => {
      this.countries = data;
      console.log('Countries:', data);
    });
  }


  onCountryChange() {
    this.divisions = [];
    this.districts = [];
    this.policeStations = [];
    this.selectedDivision = 0;
    this.selectedDistrict = 0;
    this.selectedPoliceStation = 0;

    if (this.selectedCountry) {
      this.divisionService.getDivisionByCountryID(this.selectedCountry).subscribe(data => {
        this.divisions = data;
        console.log('Divisions:', data);
        this.cd.markForCheck();
      });
    }
  }


  onDivisionChange() {
    this.districts = [];
    this.policeStations = [];
    this.selectedDistrict = 0;
    this.selectedPoliceStation = 0;

    if (this.selectedDivision) {
      this.districtService.getDistrictByDivisionId(this.selectedDivision).subscribe(data => {
        this.districts = data;
        console.log('Districts:', data);
        this.cd.markForCheck();
      });
    }
  }


  onDistrictChange() {
    this.policeStations = [];
    this.selectedPoliceStation = 0;

    if (this.selectedDistrict) {
      this.policeStationService.getPoliceStationByDistrictId(this.selectedDistrict).subscribe(data => {
        this.policeStations = data;
        console.log('Police Stations:', data);
        this.cd.markForCheck();
      });
    }
  }



  saveAddress() {
    const address = {
    address_line_1: this.addressLine1,
    address_line_2: this.addressLine2,
    country_id: this.selectedCountry,
    division_id: this.selectedDivision,
    district_id: this.selectedDistrict,
    police_station_id: this.selectedPoliceStation
  };

    this.addressService.saveAddress(address).subscribe({
      next: (res) => {
        alert('✅ Address saved successfully!');
        console.log('Saved address:', res);
        this.resetForm();
      },
      error: (err) => console.error('Error saving address:', err)
    });
  }

  resetForm() {
    this.addressLine1 = '';
    this.addressLine2 = '';
    this.selectedCountry = 0;
    this.selectedDivision = 0;
    this.selectedDistrict = 0;
    this.selectedPoliceStation = 0;
    this.divisions = [];
    this.districts = [];
    this.policeStations = [];
  }


}