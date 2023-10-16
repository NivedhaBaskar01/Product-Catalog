import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductserviceService } from 'src/app/productservice.service';
import { Product } from 'src/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product:Product=new Product;
  selectedFile!: File;
  img=new FormData;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string="";
  imageName: any;

  constructor(private productservice:ProductserviceService,private toast:ToastrService){}

  ngOnInit(){
  }

  addCategory(){
    console.log(this.product);
    this.img.append("image",this.selectedFile);
    this.productservice.addCategory(this.product).subscribe(data=>{
      this.productservice.addProdImage(this.img).subscribe(res=>{
        //alert("PRODUCT ADDED")
        this.toast.success("PRODUCT ADDED")
      window.location.reload()
      })
    })
  }
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    
  }

  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
   
    this.productservice.getProductCategory(this.imageName).subscribe(
        res => {
          console.log(res.prod_image)
          this.retrieveResonse = res;
          // this.base64Data = res.prod_image.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + res.prod_image;
          console.log(this.retrievedImage)
        }
      );
  }
}
