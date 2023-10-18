import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Business } from 'src/business';
import { Enterprise } from 'src/enterprise';
import { Residential } from 'src/residential';

@Injectable({
  providedIn: 'root'
})
export class PlanserviseService {

  constructor(private http:HttpClient) { }

  getAllBusiness():Observable<any>{
    return this.http.get("http://localhost:8080/getallbusiness");
  }

  addBusiness(business:Business):Observable<any>{
    return this.http.post(`http://localhost:8080/addbusiness`,business);
  }

  updateBusiness(business:Business):Observable<any>{
    return this.http.post(`http://localhost:8080/updatebusiness`,business);
  }

  deleteBusiness(id:any):Observable<any>{
    return this.http.get("http://localhost:8080/deletebusiness/"+id);
  }

  getBusinessById(id:any):Observable<any>{
    return this.http.get("http://localhost:8080/getbusinessbyid/"+id);
  }

  /////////////////////////////////////////////////////////////////////////

  getAllEnterprise():Observable<any>{
    return this.http.get("http://localhost:8080/getallenterprise");
  }

  addEnterprise(enterprise:Enterprise):Observable<any>{
    return this.http.post(`http://localhost:8080/addenterprise`,enterprise);
  }

  updateEnterprise(enterprise:Enterprise):Observable<any>{
    return this.http.post(`http://localhost:8080/updateenterprise`,enterprise);
  }

  deleteEnterprise(id:any):Observable<any>{
    return this.http.get("http://localhost:8080/deleteenterprise/"+id);
  }

  getEnterpriseById(id:any):Observable<any>{
    return this.http.get("http://localhost:8080/getenterprisebyid/"+id);
  }

  ////////////////////////////////////////////////////////////

  getAllResidential():Observable<any>{
    return this.http.get("http://localhost:8080/getallresidential");
  }

  addResidential(residential:Residential):Observable<any>{
    return this.http.post(`http://localhost:8080/addresidential`,residential);
  }

  updateResidential(residential:Residential):Observable<any>{
    return this.http.post(`http://localhost:8080/updateresidential`,residential);
  }

  deleteResidential(id:any):Observable<any>{
    return this.http.get("http://localhost:8080/deleteresidential/"+id);
  }

  getResidentialById(id:any):Observable<any>{
    return this.http.get("http://localhost:8080/getresidentialbyid/"+id);
  }

}
