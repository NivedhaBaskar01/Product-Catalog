import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { BusinessComponent } from './business/business.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ResidentialComponent } from './residential/residential.component';
import { CustomFilterPipe } from './custom-filter-pipe.pipe';
import { DetailsEnterpriseComponent } from './details-enterprise/details-enterprise.component';
import { DetailsBusinessComponent } from './details-business/details-business.component';
import { DetailsResidentialComponent } from './details-residential/details-residential.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BusinessComponent,
    EnterpriseComponent,
    ResidentialComponent,
    CustomFilterPipe,
    DetailsEnterpriseComponent,
    DetailsBusinessComponent,
    DetailsResidentialComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
