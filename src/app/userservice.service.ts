import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) 
  { 

  }
  getUserData(username:String,password:String)
  {
    return this.http.get('http://localhost:8080/user/'+username+'/'+password);
  }

  createUser(user:any):Observable<any>
  {
    return this.http.post('http://localhost:8080/signup/',user);
  }
}
