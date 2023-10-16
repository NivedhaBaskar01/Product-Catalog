import { Product } from "./product";

export class Business{
    businessId : string ="";
	
	productName  : string ="";
	bplanName  : string ="";
	bcost : number =0;
	bdiscount: number =0;
	bfinalPrice: number =0;
	bdata  : string ="";
	bspeed : string ="";
	bupload : string ="";
	bdwonload : string ="";
	bvoice : string ="";
	bparallel : string ="";
	bvideo : string ="";
	bStaticIp : string ="";
	bLicense : string ="";
	bdescription : string ="";	
	bhotspot : string ="";

    product:Product = new Product;
}