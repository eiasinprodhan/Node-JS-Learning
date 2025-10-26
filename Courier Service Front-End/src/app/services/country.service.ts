import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../model/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = `${environment.apiUrl}`; // ✅ dynamic base URL


  constructor(
    private http: HttpClient,
    private router: Router

  ) { }



  saveCountry(country: Country): Observable<Country> {

    return this.http.post<Country>(this.apiUrl+"/api/countries/", country);

  }

  getAllCountry():Observable<Country[]>{

    return this.http.get<Country[]>(this.apiUrl+"/api/countries/");

  }

  



}