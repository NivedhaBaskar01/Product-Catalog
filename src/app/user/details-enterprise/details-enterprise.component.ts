import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanserviseService } from 'src/app/planservise.service';
import { Enterprise } from 'src/enterprise';

@Component({
  selector: 'app-details-enterprise',
  templateUrl: './details-enterprise.component.html',
  styleUrls: ['./details-enterprise.component.css']
})
export class DetailsEnterpriseComponent {

  id:any
  enterprise:any
  compareid:any
  compareplan:any
  allEnterprise:any=[]

  star=[1,2,3,4,5];
  rating=3;
  rate=0
  updateRating(r:any)
  {
   this.rate=r 
  }

  constructor(private planservice:PlanserviseService,private route:ActivatedRoute,private router:Router){}
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];    
    this.planservice.getEnterpriseById(this.id).subscribe(data=>{
      this.enterprise=data
      console.log(this.enterprise)
      this.rating=this.enterprise.product.rating
    })

    this.planservice.getAllEnterprise().subscribe(data=>{
      this.allEnterprise=data
    })
  }
  getComparePlan(form:any){
    console.log(form,this.compareid)
    this.planservice.getEnterpriseById(this.compareid).subscribe(data=>{
      this.compareplan = data
      console.log(this.compareplan)
    })
  }
  imageUrl(url:any){
    return 'data:image/jpeg;base64,'+url;
  }
}
