import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductserviceService } from 'src/app/productservice.service';
import { Product } from 'src/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  products:any=[];
  image1:any
  updatevalue:any
  name:any
  selectedFile:any
  searchText:any;

  constructor(private productservice:ProductserviceService,private router:Router,private toast:ToastrService){}
  ngOnInit():void{
      this.getAllProducts()
  }
  getAllProducts(){
    this.productservice.getAllproducts().subscribe(data=>{
      this.products=data
      console.log(data)
    })    
  }

  updateProduct(id:any,updateprod:any){
     this.updatevalue.productId=id
     this.updatevalue.productName=updateprod.productname
     this.updatevalue.category=updateprod.category
     this.updatevalue.classification=updateprod.classification
     this.updatevalue.provider=updateprod.provider
    console.log(this.updatevalue)

    this.productservice.updateProduct(this.updatevalue).subscribe(data=>{
      console.log(data)
      this.toast.success("Product Updated")
      //alert("Product Updated")
      window.location.reload
      this.ngOnInit()
    })
  }

  displayimage(image:any){
    //console.log(image)
    const img='data:image/jpeg;base64,'+image
    this.image1=img;
    //console.log(this.image1)
    return this.image1
  }

  changeImage(id:any){
    const img=new FormData
    img.append("image",this.selectedFile);
    this.productservice.changeImage(id,img).subscribe(data=>{
      //alert("Image Changed")
      this.toast.success("Image Changed")
      window.location.reload
      this.ngOnInit()
    })

  }

  onupdate(product:any){
    this.updatevalue=product
  }

  delProduct(id:any){
    //console.log(id)  
    this.productservice.deleteProduct(id).subscribe(data=>{
      if(data==true){
        //alert("Product Deleted")
        this.toast.success("Product Deleted")
        this.ngOnInit()
      }
    } ,error => this.toast.error("Product not Deleted")
    //alert("not deleted")
    )
  }

    

  

  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
}
