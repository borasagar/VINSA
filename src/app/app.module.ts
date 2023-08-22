import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Register1Component } from './register1/register1.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './addCar/add.component';
import { UpdateComponent } from './update/update.component';
import { CartComponent } from './cart/cart.component';
import { AdminChoiceComponent } from './admin-choice/admin-choice.component';
import { UserChoiceComponent } from './user-choice/user-choice.component';
import { EditBComponent } from './edit-b/edit-b.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
// import { ToastrModule } from 'ngx-toastr';
// import { NgToastModule } from 'ng-angular-pop';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    HeaderComponent,
    LoginComponent,
    Register1Component,
    UsersListComponent,
    EditComponent,
    AddComponent,
    UpdateComponent,
    CartComponent,
    AdminChoiceComponent,
    UserChoiceComponent,
    EditBComponent,
    BikesListComponent,
    MainComponent,
    HomeComponent,
    AddBikeComponent,
    PaymentComponent,
    ThankYouComponent,
    Login1Component,
    Login2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    // NgToastModule
    // BrowserAnimationsModule, // required animations module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
