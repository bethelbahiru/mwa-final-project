import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { AddHouseComponent } from './add-house-component/add-house-component.component';
import { ViewComponent } from './admin/view/view.component';
import { UpdateHouseComponent } from './update-house/update-house.component';
import { AdminGuard } from './guard/admin.guard';
import { CustomerGuard } from './guard/customer.guard';
import { DialogComponent } from './rent/dialog/dialog.component';
import { ConfigInterceptor } from './Interceptor/config.interceptor';
import { RentComponent } from './rent/rent.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    CustomerComponent,
    AddHouseComponent,
    ViewComponent,
    UpdateHouseComponent,
    RentComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
      {path: 'customer', component: CustomerComponent, canActivate: [CustomerGuard]},
      {path: 'add', component: AddHouseComponent, canActivate:[AdminGuard]},
      {path: 'update', component: UpdateHouseComponent, canActivate: [AdminGuard]},
      {path: 'rent', component: RentComponent, canActivate: [ CustomerGuard]}
    ]),
    
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ {
            provide : HTTP_INTERCEPTORS,
            useClass: ConfigInterceptor,
            multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }