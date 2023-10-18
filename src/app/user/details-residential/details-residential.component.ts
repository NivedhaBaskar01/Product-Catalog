import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanserviseService } from 'src/app/planservise.service';

@Component({
  selector: 'app-details-residential',
  templateUrl: './details-residential.component.html',
  styleUrls: ['./details-residential.component.css']
})
export class DetailsResidentialComponent {
  id:any
  residential:any

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
    this.planservice.getResidentialById(this.id).subscribe(data=>{
      this.residential=data
      console.log(this.residential)
    })
  }

  imageUrl(url:any){
    return 'data:image/jpeg;base64,'+url;
  }
}
