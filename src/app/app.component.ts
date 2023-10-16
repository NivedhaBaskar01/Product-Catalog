import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { UserserviceService } from './userservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productcatalog';
  constructor(public userservice:UserserviceService){}

  ngOnInit(): void {
    this.loaderAnimation()
  }
  
  loaderStatus:string = "hide";
  loaderAnimation(){
    this.loaderStatus = "show";
    setTimeout(
      () =>{
    this.loaderStatus = "hide";
      },4000 )
  }

  
  
}
