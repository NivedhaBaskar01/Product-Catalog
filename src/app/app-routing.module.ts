import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path:"adminlogin",
    component:AdminloginComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"footer",
    component:FooterComponent
  },
  {
    path:"admin",
    loadChildren:()=> import('./admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path:"user",
    loadChildren:()=> import('./user/user.module').then((m) => m.UserModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
