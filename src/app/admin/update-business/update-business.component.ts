import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PlanserviseService } from 'src/app/planservise.service';
import { Business } from 'src/business';

@Component({
  selector: 'app-update-business',
  templateUrl: './update-business.component.html',
  styleUrls: ['./update-business.component.css']
})
export class UpdateBusinessComponent {

  allBusiness:any=[] ;
  updatevalue:any;
  searchtxt:any;

  constructor(private planservice:PlanserviseService,private toast:ToastrService){}

  ngOnInit():void{
    this.getAllBusiness()
}
getAllBusiness(){
  this.planservice.getAllBusiness().subscribe(data=>{
    this.allBusiness=data
    console.log(data)
  })
}
updateBusiness(id:any, form:any){
  console.log(id)
	this.updatevalue.bplanName=form.planname;
	this.updatevalue.bcost=form.cost;
	this.updatevalue.bdiscount=form.discount;
	this.updatevalue.bfinalPrice=Math.round (form.cost - (form.discount*0.01*form.cost));
	this.updatevalue.bdata =form.data;
	this.updatevalue.bspeed=form.speed;
	this.updatevalue.bupload=form.upload;
	this.updatevalue.bdwonload=form.download;
	this.updatevalue.bvoice=form.voice;
	// this.updatevalue.bparallel;
	this.updatevalue.bvideo=form.video;
	this.updatevalue.bStaticIp=form.staticip;
	this.updatevalue.bLicense=form.license;
	this.updatevalue.bdescription=form.description;	
	this.updatevalue.bhotspot=form.hotspot;
  console.log(this.updatevalue);
  this.planservice.updateBusiness(this.updatevalue).subscribe(data=>{
    console.log(data)
    this.toast.success("Plan Updated")
    window.location.reload
    this.ngOnInit()
  })
}

deleteBusiness(id:any){
    console.log(id)
    this.planservice.deleteBusiness(id).subscribe(data=>{
      console.log(data)
      window.location.reload
      this.ngOnInit()
    })
}
 
onUpdate(business:any){
  this.updatevalue=business
}

}
