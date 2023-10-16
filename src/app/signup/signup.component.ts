import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { Users } from '../users';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  re_password:string=""
  users:Users = new Users;

  constructor(private userservice:UserserviceService,private router:Router,private toast:ToastrService)
  {}

  signupUser()
  {
    if(this.users.password===this.re_password){
    console.log(this.users)
    this.userservice.createUser(this.users).subscribe(data => {
      console.log(data);
      this.toast.success("Signup Success","Redirecting to Login",{timeOut:2000})
     // alert("Signup sucess got to login");
      this.router.navigate(['/login']);
    },
      error => this.toast.error("Signup not done")//alert("signup not done")
      );
 }
 else{
  this.toast.error("Passwords doesn't match","",{timeOut:2000})
    //alert("passwords doesn't match");
 }
}

}
