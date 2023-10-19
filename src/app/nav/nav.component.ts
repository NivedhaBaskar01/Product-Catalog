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
  searchtxt:any
  constructor(public userservice:UserserviceService,private router:Router){
  }

  getrole(){
    return localStorage.getItem("role");
  }

  gotoSearch(search:any){
    if(search.searchtxt == undefined || search.searchtxt == ''){
        this.router.navigate(['/home']);
      }
      else{
    this.searchtxt = search.searchtxt
    console.log(this.searchtxt)
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>
    this.router.navigate(['/search/'+this.searchtxt])
    )
  }
}
}
