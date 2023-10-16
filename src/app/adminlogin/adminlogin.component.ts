import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  otprequest:boolean=false;
  otp:any="";
  generatedOtp:any=""
  adminPassword:string=""
  adminName:string=""
  constructor(private userservice:UserserviceService,private router:Router,private toast:ToastrService)
  {}

  requestOtp(){
    console.log("requested otp");
    this.userservice.generateOTP().subscribe(data => {
        this.generatedOtp=data;
        this.otprequest=true;
      console.log("otp : "+this.generatedOtp);        
      },
        error => this.toast.error("invalid credentials",'',{ timeOut: 2000,}));
        //alert(error+"invalid credentials"));
      
  }

  validateOtp(){
    console.log(this.generatedOtp);
    if(this.otp==this.generatedOtp){
      this.toast.success("Admin Login Successful","",{timeOut:2000})
      //alert("Admin Login Successful");
      this.router.navigate(['/home']);
      this.userservice.loggedin("admin");
    }
    else{
      this.toast.error("OTP Invalid","",{timeOut:2000})
      //alert("OTP invalid");
    }
  }
}
