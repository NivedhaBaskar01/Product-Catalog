import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  users:Users = new Users();
  getData:any
  constructor(private userservice:UserserviceService,private router:Router)
  {}
  loginuser()
  {
    console.log(this.users)
    this.userservice.getUserData(this.users).subscribe(data => {
      console.log(data);
      alert("Login Successful");
      this.router.navigate(['/home']);
    },
      error => alert("Enter correct credentials"));
  }

}
