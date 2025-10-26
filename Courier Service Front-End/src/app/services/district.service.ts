import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { District } from '../model/district.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

    private apiUrl = `${environment.apiUrl}`; // ✅ dynamic base URL


  constructor(
    private http: HttpClient,
    private router: Router

  ){}


   saveDistrict(district: District): Observable<District> {
  
      return this.http.post<District>(this.apiUrl + "/api/districts/", district);
  
    }


  
    getDistrictByDivisionId(id: number): Observable<District[]> {
  
      return this.http.get<District[]>(this.apiUrl + "/api/districts/division/" + id);
  
    }

    
  
}