import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PlanserviseService } from 'src/app/planservise.service';
import { Residential } from 'src/residential';

@Component({
  selector: 'app-update-residential',
  templateUrl: './update-residential.component.html',
  styleUrls: ['./update-residential.component.css']
})
export class UpdateResidentialComponent {
  searchtxt:any
  allResidential:any=[]
  updatevalue:any

  constructor(private planservice:PlanserviseService,private toast:ToastrService){}

  ngOnInit():void{
    this.getAllResidential()
}

getAllResidential(){
  this.planservice.getAllResidential().subscribe(data=>{
    this.allResidential=data
    console.log(data)
  })
}

updateResidential(id:any, form:any){

  this.updatevalue.residentialId = id;
  this.updatevalue.rplanname = form.planname;
  this.updatevalue.rcost = form.cost;
  this.updatevalue.rdiscount = form.discount;
  this.updatevalue.rfinalPrice = form.cost - (form.discount * 0.01 * form.cost);
  this.updatevalue.rdata = form.data;
  this.updatevalue.rspeed = form.speed;
  this.updatevalue.rvalidity = form.validity;
  this.updatevalue.rpostfup = form.postfup;
  this.updatevalue.rsms = form.sms;
  this.updatevalue.rwcall = form.wcall;
  this.updatevalue.rsubscription = form.subscription;
  this.updatevalue.rhotspot = form.hotspot;
  this.updatevalue.rdescription = form.description;

  console.log(this.updatevalue)
  this.planservice.updateResidential(this.updatevalue).subscribe(data=> {
     console.log(data)
     this.toast.success("Plan Updated")
     window.location.reload
     this.ngOnInit()
  } )
  }

  deleteResidential(id:any){
     //console.log(id)
     this.planservice.deleteResidential(id).subscribe(data=>{
        this.toast.success("Plan Deleted")
        console.log(id)
        window.location.reload
        this.ngOnInit()
     })
  }

  onUpdate(residential:any){
    this.updatevalue=residential
  }

}
