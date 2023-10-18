import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PlanserviseService } from 'src/app/planservise.service';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.css']
})
export class ResidentialComponent {
  allResidential:any = []

  constructor(private planservice:PlanserviseService,private toast:ToastrService){}

  ngOnInit():void{
    this.getallResidential()
  }

@ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;
  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 1200), behavior: 'smooth' });
  }
 
  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 1200), behavior: 'smooth' });
  }
  getallResidential(){
    this.planservice.getAllResidential().subscribe(data=>{
      this.allResidential = data;
      console.log(data)
    })
  }

  imageUrl(url:any){
    return 'data:image/jpeg;base64,'+url;
  }
}
