import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PoliceStation } from '../model/police-station.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoliceStationService {

    private apiUrl = `${environment.apiUrl}`; // ✅ dynamic base URL


  constructor(
    private http: HttpClient,
    private router: Router

  ){}


 savePoliceStation(policeStation: PoliceStation): Observable<PoliceStation> {
  
      return this.http.post<PoliceStation>(this.apiUrl + "/api/policestations/", policeStation);
  
    }
  
    getPoliceStationByDistrictId(id: number): Observable<PoliceStation[]> {
  
      return this.http.get<PoliceStation[]>(this.apiUrl + "/api/policestations/district/" + id);
  
    }

  
}