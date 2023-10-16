import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) 
  {
  }

  getAllproducts(){
    return this.http.get("http://localhost:8080/getproduct");
  }

  addCategory(product:Product):Observable<any>{
    return this.http.post(`http://localhost:8080/addproduct`,product);
  }

  addProdImage(image:FormData):Observable<any>{
    return this.http.post(`http://localhost:8080/addprodimage`,image);
  }

  getProductCategory(id:any):Observable<any>{
    return this.http.get("http://localhost:8080/get/" + id);
  }

  deleteProduct(id:any):Observable<any>{
    return this.http.get("http://localhost:8080/deleteproduct/" + id)
  }

  updateProduct(product:Product):Observable<any>{
    return this.http.post(`http://localhost:8080/updateproduct`,product);
  }

  changeImage(id:any,image:FormData):Observable<any>{
    return this.http.post(`http://localhost:8080/changeimage/`+id+``,image);
  }
}
