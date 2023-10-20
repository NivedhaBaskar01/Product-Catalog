import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';

import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CustomFilterPipe } from './custom-filter-pipe.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    AdminloginComponent,
    PreloaderComponent,
    NavComponent,
    AboutComponent,
    FooterComponent,
    SearchComponent,
    CustomFilterPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
