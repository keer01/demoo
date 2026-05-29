
import { Injectable } from '@angular/core';

 

import { HttpClient } from '@angular/common/http';

 

import { Observable } from 'rxjs';

 

import { ExpenseRequest } from '../../models/expense-request/expense-request';

 

@Injectable({

  providedIn: 'root'

})

export class ExpenseService {

 

  private baseUrl = 'http://localhost:8080/api/expenses';

 

  constructor(private http: HttpClient) {}

 

  addExpense(request: ExpenseRequest): Observable<any> {

 

    return this.http.post(

      this.baseUrl,

      request

    );

  }

 

  getExpenses(): Observable<any> {

 

    return this.http.get(this.baseUrl);

  }

 deleteExpense(id:number):Observable<any>{
  return this.http.delete(
    `${this.baseUrl}/${id}`
  );
 }

 selectedExpense:any=null;

 updateExpense(
  id:number,
  request:any
 ):Observable<any>{
  return this.http.put(
    `${this.baseUrl}/${id}`,
    request
  );
 }
}

