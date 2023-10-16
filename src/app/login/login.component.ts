import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { Users } from '../users';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  users:Users = new Users();
  constructor(private userservice:UserserviceService,private router:Router,private toast:ToastrService)
  {}

  loginUser()
  {
    console.log(this.users)
    this.userservice.getUserData(this.users).subscribe(data => {
      console.log(data);
      if(data==null){
        //alert("User does not exists");
        this.toast.error("User doesn't exists",'',{ timeOut: 2000,})
      }
      else
      {
        //alert("Login Successful");
        this.toast.success("Login Successful",'',{ timeOut: 2000,})
      this.userservice.isLogged=true;
      this.userservice.loggedin("user");
      this.router.navigate(['/home']);}
    },
      error => this.toast.error("Invalid Credentials"))//alert("invalid credentials"));
  }
}
