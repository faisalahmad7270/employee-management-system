import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
   providedIn: 'root'
})
export class EmployeeService {
  private baseURL="http://localhost:8080/api/v1/employees"
  constructor(private httpClient:HttpClient) { 
    
  }

  public getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  public createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(this.baseURL,employee);
  }
  public getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseURL+'/'+id);
  }
  deleteEmployee(id:number):Observable<object>{
    return this.httpClient.delete(this.baseURL+'/'+id);
  }
}
