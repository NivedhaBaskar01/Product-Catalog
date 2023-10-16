import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PlanserviseService } from 'src/app/planservise.service';

@Component({
  selector: 'app-update-enterprise',
  templateUrl: './update-enterprise.component.html',
  styleUrls: ['./update-enterprise.component.css']
})
export class UpdateEnterpriseComponent {

  searchtxt:any
  allEnterprise:any=[]
  updatevalue:any

  constructor(private planservice:PlanserviseService,private toast:ToastrService){}

  ngOnInit():void{
    this.getAllEnterprise()
}
getAllEnterprise(){
  this.planservice.getAllEnterprise().subscribe(data=>{
    this.allEnterprise=data
    console.log(data)
  })
}

updateEnterprise(id:any,form:any){
    console.log(id, form)
    this.updatevalue.eplanname= form.planname
    this.updatevalue.ecost= form.cost
    this.updatevalue.ediscount= form.discount
    this.updatevalue.efinalprice= form.cost - (form.discount * 0.01 * form.cost)
    this.updatevalue.edata= form.data
    this.updatevalue.espeed= form.speed
    this.updatevalue.evideo= form.video
    this.updatevalue.efilesharing= form.fileshare
    this.updatevalue.ecloud= form.cloud
    this.updatevalue.evoip= form.voip
    this.updatevalue.efrequency= form.frequency
    this.updatevalue.eisolation= form.isolation
    this.updatevalue.eroaming= form.roaming
    this.updatevalue.edescription= form.description

    console.log(this.updatevalue)
    this.planservice.updateEnterprise(this.updatevalue).subscribe(data=>{
      console.log(data)
      this.toast.success("Plan updated")
      window.location.reload
      this.ngOnInit()
    })
}

deleteEnterprise(id:any){
  console.log(id)
  this.planservice.deleteEnterprise(id).subscribe(data=>{
    console.log("Deleted "+data)
    this.toast.success("Enterprise plan deleted")
    window.location.reload
    this.ngOnInit()
  })

}

onUpdate(enterprise:any){
  this.updatevalue=enterprise
}

}
