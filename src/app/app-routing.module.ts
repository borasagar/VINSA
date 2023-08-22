import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { AddComponent } from './addCar/add.component';
import { AdminChoiceComponent } from './admin-choice/admin-choice.component';
import { AuthGuard } from './auth.guard';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CartComponent } from './cart/cart.component';
import { EditBComponent } from './edit-b/edit-b.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { MainComponent } from './main/main.component';
import { PaymentComponent } from './payment/payment.component';
import { Register1Component } from './register1/register1.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { UpdateComponent } from './update/update.component';
import { UserChoiceComponent } from './user-choice/user-choice.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'home',component:HomeComponent},
{path:'login2',component:Login2Component},
{path:'register1',component:Register1Component},
{path:'users-list',canActivate:[AuthGuard],component:UsersListComponent},
{path:'cars-list',canActivate:[AuthGuard],component:CarsListComponent},
{path:'bikes-list',canActivate:[AuthGuard],component:BikesListComponent},
{path:'edit',canActivate:[AuthGuard],component:EditComponent},
{path:'edit-b',canActivate:[AuthGuard],component:EditBComponent},
{path:'update',canActivate:[AuthGuard],component:UpdateComponent},
{path:'add',canActivate:[AuthGuard],component:AddComponent},
{path:'add-bike',canActivate:[AuthGuard],component:AddBikeComponent},
{path:'cart',canActivate:[AuthGuard],component:CartComponent},
{path:'admin-choice',canActivate:[AuthGuard],component:AdminChoiceComponent},
{path:'user-choice',canActivate:[AuthGuard],component:UserChoiceComponent},
{path:'payment',canActivate:[AuthGuard],component:PaymentComponent},
{path:'thank-you',canActivate:[AuthGuard],component:ThankYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
