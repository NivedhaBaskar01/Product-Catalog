import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { PlanserviseService } from '../planservise.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  allResidential:any = []
  allEnterprise:any = []
  allBusiness:any = []
  allProvider:any
  searchtxt:any 

  constructor(private productservice:ProductserviceService,private planservice:PlanserviseService,private toast:ToastrService,private route:ActivatedRoute){}

  ngOnInit():void{
    this.searchtxt=this.route.snapshot.params['id']; 
    this.getallResidential()
    this.getallEnterprise()
    this.getallBusiness()
    this.getAllprovider()
  }
 //////////enterprise
  @ViewChild('ewidgetwireline', { read: ElementRef })
  public ewidgetwireline!: ElementRef<any>;
  public escrollRightwireline(): void {
    this.ewidgetwireline.nativeElement.scrollTo({ left: (this.ewidgetwireline.nativeElement.scrollLeft + 1200), behavior: 'smooth' });
  } 
  public escrollLeftwireline(): void {
    this.ewidgetwireline.nativeElement.scrollTo({ left: (this.ewidgetwireline.nativeElement.scrollLeft - 1200), behavior: 'smooth' });
  }

  @ViewChild('ewidgetwireless', { read: ElementRef })
  public ewidgetwireless!: ElementRef<any>;
  public escrollRightwireless(): void {
    this.ewidgetwireless.nativeElement.scrollTo({ left: (this.ewidgetwireless.nativeElement.scrollLeft + 1200), behavior: 'smooth' });
  } 
  public escrollLeftwireless(): void {
    this.ewidgetwireless.nativeElement.scrollTo({ left: (this.ewidgetwireless.nativeElement.scrollLeft - 1200), behavior: 'smooth' });
  }

  //////////////business
  @ViewChild('bwidgetwireline', { read: ElementRef })
  public bwidgetwireline!: ElementRef<any>;
  public bscrollRightwireline(): void {
    this.bwidgetwireline.nativeElement.scrollTo({ left: (this.bwidgetwireline.nativeElement.scrollLeft + 1200), behavior: 'smooth' });
  } 
  public bscrollLeftwireline(): void {
    this.bwidgetwireline.nativeElement.scrollTo({ left: (this.bwidgetwireline.nativeElement.scrollLeft - 1200), behavior: 'smooth' });
  }

  @ViewChild('bwidgetwireless', { read: ElementRef })
  public bwidgetwireless!: ElementRef<any>;
  public bscrollRightwireless(): void {
    this.bwidgetwireless.nativeElement.scrollTo({ left: (this.bwidgetwireless.nativeElement.scrollLeft + 1200), behavior: 'smooth' });
  } 
  public bscrollLeftwireless(): void {
    this.bwidgetwireless.nativeElement.scrollTo({ left: (this.bwidgetwireless.nativeElement.scrollLeft - 1200), behavior: 'smooth' });
  }

  ///////////// residential
  @ViewChild('rwidgetwireline', { read: ElementRef })
  public rwidgetwireline!: ElementRef<any>;
  public rscrollRightwireline(): void {
    this.rwidgetwireline.nativeElement.scrollTo({ left: (this.rwidgetwireline.nativeElement.scrollLeft + 1200), behavior: 'smooth' });
  } 
  public rscrollLeftwireline(): void {
    this.rwidgetwireline.nativeElement.scrollTo({ left: (this.rwidgetwireline.nativeElement.scrollLeft - 1200), behavior: 'smooth' });
  }

  @ViewChild('rwidgetwireless', { read: ElementRef })
  public rwidgetwireless!: ElementRef<any>;
  public rscrollRightwireless(): void {
    this.rwidgetwireless.nativeElement.scrollTo({ left: (this.rwidgetwireless.nativeElement.scrollLeft + 1200), behavior: 'smooth' });
  } 
  public rscrollLeftwireless(): void {
    this.rwidgetwireless.nativeElement.scrollTo({ left: (this.rwidgetwireless.nativeElement.scrollLeft - 1200), behavior: 'smooth' });
  }




  getallResidential(){
    this.planservice.getAllResidential().subscribe(data=>{
      this.allResidential = data;
      console.log(data)
    })
  }
  getallEnterprise(){
    this.planservice.getAllEnterprise().subscribe(data=>{
      this.allEnterprise = data;
      console.log(data)
    })
  }
  getallBusiness(){
    this.planservice.getAllBusiness().subscribe(data=>{
      this.allBusiness = data;
      console.log(data)
    })
  }

 getAllprovider(){
    this.productservice.getAllProviders().subscribe(data=>{
     this.allProvider=data
    })
 }
  imageUrl(url:any){
    return 'data:image/jpeg;base64,'+url;
  }
}
