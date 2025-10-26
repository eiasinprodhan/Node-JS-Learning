import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Address } from '../model/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  private apiUrl = `${environment.apiUrl}`; // ✅ dynamic base URL



  constructor(
    private http: HttpClient,
    private router: Router

  ) { }


  // Fetch all addresses
  getAllAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl+"/api/address/");
  }

  // Save new address
  saveAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.apiUrl+"/api/address/", address);
  }
  



}