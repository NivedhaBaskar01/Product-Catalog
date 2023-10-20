import { Component, ɵsetAlternateWeakRefImpl } from '@angular/core';
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
    if(this.adminName == 'nivedhabaskar2001@gmail.com' || this.adminName == 'jayashree.sriuma@gmail.com'){
      if(this.adminPassword == 'admin123'){
        console.log("requested otp");
    this.userservice.generateOTP(this.adminName).subscribe(data => {
        this.generatedOtp=data;
        this.otprequest=true;
      console.log("otp : "+this.generatedOtp);        
      },
        error => this.toast.error("invalid credentials",'',{ timeOut: 2000,}));
      
      }
      else{
        this.toast.error("Incorrect admin password")
      }
    }
    else{
      this.toast.error("Invalid Admin Name")
    }
    // console.log("requested otp");
    // this.userservice.generateOTP().subscribe(data => {
    //     this.generatedOtp=data;
    //     this.otprequest=true;
    //   console.log("otp : "+this.generatedOtp);        
    //   },
    //     error => this.toast.error("invalid credentials",'',{ timeOut: 2000,}));
    //     //alert(error+"invalid credentials"));
      
  }

  validateOtp(){
    console.log(this.generatedOtp);
    if(this.otp==this.generatedOtp){
      this.toast.success("Admin Login Successful","",{timeOut:2000})
      //alert("Admin Login Successful");
      this.router.navigate(['/admin/adminhome']);
      this.userservice.loggedin("admin");
    }
    else{
      this.toast.error("OTP Invalid","",{timeOut:2000})
      //alert("OTP invalid");
    }
  }
}
