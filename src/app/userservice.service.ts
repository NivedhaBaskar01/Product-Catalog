import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
