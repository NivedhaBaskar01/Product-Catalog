import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  model:any={}
  getData:any
  constructor(private userservice:UserserviceService,private router:Router)
  {}
  loginuser()
  {
    var user=this.model.username;
    var password=this.model.password;
    this.userservice.getUserData(user,password).subscribe((res:any)=>
    {
      this.getData=res;
      if(this.getData==true)
      {
        this.router.navigate(['/home'])
      }
      else{
        alert("Invalid credentials");
      }
    })
  }

}
