import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanserviseService } from 'src/app/planservise.service';

@Component({
  selector: 'app-details-business',
  templateUrl: './details-business.component.html',
  styleUrls: ['./details-business.component.css']
})
export class DetailsBusinessComponent {
  id:any
  business:any

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
    this.planservice.getBusinessById(this.id).subscribe(data=>{
      this.business=data
      console.log(this.business)
    })
  }

  imageUrl(url:any){
    return 'data:image/jpeg;base64,'+url;
  }
}
