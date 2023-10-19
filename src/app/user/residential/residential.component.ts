import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlanserviseService } from 'src/app/planservise.service';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.css']
})
export class ResidentialComponent {
  allResidential:any = []
  allProvider:any
  wirelessprovider:any
  wirelineprovider:any

  constructor(private productservice:ProductserviceService,private planservice:PlanserviseService,private toast:ToastrService,private router:Router){}

  ngOnInit():void{
    this.getallResidential()
    this.getAllprovider()
  }

  @ViewChild('widgetwireline', { read: ElementRef })
  public widgetwireline!: ElementRef<any>;
  public scrollRightwireline(): void {
    this.widgetwireline.nativeElement.scrollTo({ left: (this.widgetwireline.nativeElement.scrollLeft + 1200), behavior: 'smooth' });
  } 
  public scrollLeftwireline(): void {
    this.widgetwireline.nativeElement.scrollTo({ left: (this.widgetwireline.nativeElement.scrollLeft - 1200), behavior: 'smooth' });
  }

  @ViewChild('widgetwireless', { read: ElementRef })
  public widgetwireless!: ElementRef<any>;
  public scrollRightwireless(): void {
    this.widgetwireless.nativeElement.scrollTo({ left: (this.widgetwireless.nativeElement.scrollLeft + 1200), behavior: 'smooth' });
  } 
  public scrollLeftwireless(): void {
    this.widgetwireless.nativeElement.scrollTo({ left: (this.widgetwireless.nativeElement.scrollLeft - 1200), behavior: 'smooth' });
  }

  getallResidential(){
    this.planservice.getAllResidential().subscribe(data=>{
      this.allResidential = data;
      console.log(data)
    })
  }
 getAllprovider(){
    this.productservice.getAllProviders().subscribe(data=>{
     this.allProvider=data
    })
 }
 goto(id:any){
  this.router.navigate(['/user/residential/'+id]);
}
  imageUrl(url:any){
    return 'data:image/jpeg;base64,'+url;
  }
}
