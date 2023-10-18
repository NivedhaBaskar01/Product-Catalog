import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlanserviseService } from 'src/app/planservise.service';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent {
  allEnterprise:any = []
  allProvider : any 
  wirelessprovider : any
  wirelineprovider:any
  constructor(private productservice:ProductserviceService,private planservice:PlanserviseService,private toast:ToastrService,private route:Router){}

  ngOnInit():void{
    this.getallEnterprise()
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


  getallEnterprise(){
    this.planservice.getAllEnterprise().subscribe(data=>{
      this.allEnterprise = data
      console.log(data)
    })
  }

  getAllprovider(){
     this.productservice.getAllProviders().subscribe(data=>{
      this.allProvider=data
     })
  }




  moredetails(){
   this.route.navigate(['/user/viewdetails']);
  }

  imageUrl(url:any){
    return 'data:image/jpeg;base64,'+url;
  }
}
