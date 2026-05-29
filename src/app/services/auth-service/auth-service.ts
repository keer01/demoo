
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

 

import { Observable } from 'rxjs';

 

import { LoginRequest } from '../../models/login-request/login-request';

 

@Injectable({

  providedIn: 'root'

})

export class AuthService {

 

  private baseUrl = 'http://localhost:8080/api/auth';

 

  constructor(private http: HttpClient) {}

 

  login(request: LoginRequest): Observable<string> {

 

    return this.http.post(

      `${this.baseUrl}/login`,

      request,

      {

        responseType: 'text'

      }

    );

  }
register(request: any): Observable<string> {

 

  return this.http.post(

    `${this.baseUrl}/register`,

    request,

    {

      responseType: 'text'

    }

  );

}

}

