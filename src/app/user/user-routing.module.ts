import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { Enterprise } from 'src/enterprise';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ResidentialComponent } from './residential/residential.component';
import { DetailsEnterpriseComponent } from './details-enterprise/details-enterprise.component';
import { DetailsResidentialComponent } from './details-residential/details-residential.component';
import { DetailsBusinessComponent } from './details-business/details-business.component';


const routes: Routes = [
  {path: 'business',component:BusinessComponent},
  {path: 'enterprise' , component: EnterpriseComponent},
  {path: 'residential' , component: ResidentialComponent},
  {path: 'enterprise/:id',component:DetailsEnterpriseComponent},
  {path: 'residential/:id', component:DetailsResidentialComponent},
  {path: 'business/:id',component:DetailsBusinessComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
