import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {



  private apiUrl = `${environment.apiUrl}`; // ✅ dynamic base URL


  constructor(
    private http: HttpClient,
    private router: Router

  ){}



    saveUser(userData: any): Observable<any>{

      return this.http.post<any>(this.apiUrl+"/api/users/save", userData);

    }


    
  
}