import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  re_password:string=""
  users:Users = new Users();

  constructor(private userservice:UserserviceService,private router:Router){}

  signupUser(){
    this.userservice.createUser(this.users).subscribe(data => {
      console.log(data);
      alert("Registration Successful");
      this.router.navigate(['/login']);
    },
      error => console.log(error));

    
    
  }



}
