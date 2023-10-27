import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlanserviseService } from 'src/app/planservise.service';

@Component({
  selector: 'app-details-business',
  templateUrl: './details-business.component.html',
  styleUrls: ['./details-business.component.css']
})
export class DetailsBusinessComponent {
  id:any
  business:any
  compareid:any
  compareplan:any
  allBusiness:any=[]

  star=[1,2,3,4,5];
  rating:any
  rate=0
  updateRating(r:any)
  {
   this.rate=r 
  }

  constructor(private planservice:PlanserviseService,private route:ActivatedRoute,private router:Router,private toast:ToastrService){}
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];    
    this.planservice.getBusinessById(this.id).subscribe(data=>{
      this.business=data
      this.rating=this.business.product.rating
      console.log(this.business)
    })
    this.planservice.getAllBusiness().subscribe(data=>{
      this.allBusiness=data
    })
  }
  getComparePlan(form:any){
    console.log(form,this.compareid)
    this.planservice.getBusinessById(this.compareid).subscribe(data=>{
      this.compareplan = data
      console.log(this.compareplan)
    })
    
  }
  imageUrl(url:any){
    return 'data:image/jpeg;base64,'+url;
  }

  giveRating(){
    this.toast.success("Thanks for the review!!");
  }
}
