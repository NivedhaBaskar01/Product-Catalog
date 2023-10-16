import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  role:String='default';
  username:string='default';
  constructor(public userservice:UserserviceService,private router:Router){
  }

  getrole(){
    return localStorage.getItem("role");
  }
}
