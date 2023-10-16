import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PlanserviseService } from 'src/app/planservise.service';
import { ProductserviceService } from 'src/app/productservice.service';
import { Business } from 'src/business';
import { Enterprise } from 'src/enterprise';
import { Residential } from 'src/residential';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent {

  category:string='default'
  allProducts:any
  business:Business=new Business;
  enterprise:Enterprise=new Enterprise;
  residential:Residential=new Residential
  b_product_id:any

  constructor(private productservice:ProductserviceService,private planservice:PlanserviseService,private toast:ToastrService){}
  ngOnInit():void{
    this.getAllProducts()
}
getAllProducts(){
  this.productservice.getAllproducts().subscribe(data=>{
    this.allProducts=data
    console.log(data)
  })    
}

addBusiness(addplanform:any){
  this.business.bfinalPrice= this.business.bcost - (this.business.bdiscount *0.01*this.business.bcost)
  this.business.productName=this.business.product.productName
  //console.log(this.business)  
  this.planservice.addBusiness(this.business).subscribe(data=>{
    console.log(data)
    this.toast.success("Business Plan Added")
    window.location.reload
    this.ngOnInit()

  })
}

addEnterprise(){
  this.enterprise.efinalprice= this.enterprise.ecost - (this.enterprise.ediscount *0.01*this.enterprise.ecost)
  this.enterprise.productName=this.enterprise.product.productName;
  //console.log(this.enterprise)
  this.planservice.addEnterprise(this.enterprise).subscribe(data=>{
    console.log("Plan Added"+data)
    this.toast.success("Enterprise plan added");
    window.location.reload
    this.ngOnInit()
  })
}

addResidential(){
  this.residential.productName=this.residential.product.productName;
  this.residential.rfinalPrice = this.residential.rcost - (this.residential.rdiscount * 0.01 * this.residential.rcost)
  //console.log(this.residential)
  this.planservice.addResidential(this.residential).subscribe(data=>{
    this.toast.success("Residential Plan Added")
    window.location.reload
    this.ngOnInit()
    console.log("Plan Added"+data)
    
  })
}

}
