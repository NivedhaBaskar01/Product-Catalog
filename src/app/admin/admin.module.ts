import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewProductComponent } from './view-product/view-product.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
// import { CustomFilterPipe } from '../custom-filter-pipe.pipe';
import { CustomFilterPipe } from './custom-filter-pipe.pipe';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { UpdateBusinessComponent } from './update-business/update-business.component';
import { UpdateEnterpriseComponent } from './update-enterprise/update-enterprise.component';
import { UpdateResidentialComponent } from './update-residential/update-residential.component';


@NgModule({
  declarations: [
    ViewProductComponent,
    AddProductComponent,
    CustomFilterPipe,
    AddPlanComponent,
    UpdateBusinessComponent,
    UpdateEnterpriseComponent,
    UpdateResidentialComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModule { }
