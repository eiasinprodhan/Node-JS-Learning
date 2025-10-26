import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Division } from '../model/division.model';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  private apiUrl = `${environment.apiUrl}`; // ✅ dynamic base URL


  constructor(
    private http: HttpClient,
    private router: Router

  ) { }


  saveDivision(division: Division): Observable<Division> {

    return this.http.post<Division>(this.apiUrl + "/api/divisions/", division);

  }

  getDivisionByCountryID(id: number): Observable<Division[]> {

    return this.http.get<Division[]>(this.apiUrl + "/api/divisions/country/" + id);

  }
  


}