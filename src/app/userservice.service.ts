import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  user:Users = new Users();

  constructor(private http:HttpClient) 
  { 

  }
  getUserData(user:Users):Observable<any>
  {
    return this.http.post(`http://localhost:8080/login`,user);
  }

  createUser(user: Users):Observable<any>{
    return this.http.post(`http://localhost:8080/users`,user);
  }
}
