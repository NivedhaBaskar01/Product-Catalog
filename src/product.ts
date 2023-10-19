import { TitleCasePipe } from "@angular/common";

export class Product{
   productId:string  ="";
   productName : string  = "";
   category : string  = "";
   classification  : string = "";
   provider : string  = "";
   prod_image : File | undefined;
   rating : number = 0;
}