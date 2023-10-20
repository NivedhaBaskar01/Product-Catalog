import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { UpdateBusinessComponent } from './update-business/update-business.component';
import { UpdateEnterpriseComponent } from './update-enterprise/update-enterprise.component';
import { UpdateResidentialComponent } from './update-residential/update-residential.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';


const routes: Routes = [
  { path:'viewproduct', component:ViewProductComponent,
 },
 {path:'adminhome',component:AdminhomeComponent},
 {path : 'addproduct',component:AddProductComponent},
 {path: 'addplan' ,component:AddPlanComponent},
 {path: 'updatebusiness',component:UpdateBusinessComponent},
 {path: 'updateenterprise',component:UpdateEnterpriseComponent},
 {path: 'updateresidential', component:UpdateResidentialComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
