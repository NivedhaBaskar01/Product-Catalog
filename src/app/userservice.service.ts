import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs/internal/Observable';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  user:Users = new Users();
  isLogged:boolean=false;
  role:string="default";
  isLoggedin(){
    return this.isLogged;
  }
  constructor(private http:HttpClient) 
  {
  }

  loggedin(role:string){
    if(role=="user"){
      this.role="user";
      localStorage.setItem("role",role);
    }
    else if(role=="admin"){
      this.role="admin";
      localStorage.setItem("role",role);
    }
    this.isLogged=true;
    //console.log(localStorage.getItem("role"));
  }

  createUser(user: Users):Observable<any>{
    return this.http.post(`http://localhost:8080/signup`,user);
  }

  getUserData(user: Users):Observable<any>{
    return this.http.post(`http://localhost:8080/login`,user);
  }

  generateOTP(adminMail:any)
  {
    return this.http.get("http://localhost:8080/generateOTP/"+adminMail);
  }

  logout(){
    this.isLogged=false;
    this.role="default";
    localStorage.setItem("role","default");
  }

}
