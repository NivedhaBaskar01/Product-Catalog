import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  re_password:string=""
  model:any={}
  getData:any
  constructor(private userservice:UserserviceService,private router:Router)
  {}
  signupuser(form:any)
  {
    // var user=this.model.username;
    // var password=this.model.password;
    this.userservice.createUser(form.value).subscribe((res:any)=>
    {
      this.getData=res;
      if(this.getData==true)
      {
        this.router.navigate(['/login'])
      }
      else{
        alert("Sign up failed");
      }
    })
  }



}
