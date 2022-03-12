import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsUsComponent } from './Contacts-us/contacts-us/contacts-us.component';
import { HomeComponent } from './Home/home/home.component';
import { RegisterComponent } from './Register/register/register.component';
import { LoginComponent } from './Login/login/login.component';
import { GalleryComponent } from './Gallery/gallery/gallery.component';
import { AboutUsComponent } from './About-us/about-us/about-us.component';
import { ChatComponent } from './Chat/chat/chat.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { OrdersComponent } from './Orders/orders/orders.component';
import { UsersComponent } from './Users/users/users.component';
import { ProductsComponent } from './Products/products/products.component';
import { UpdateUserComponent } from './Update-user/update-user/update-user.component';

const routes: Routes = [


{path:'home',component:HomeComponent},

{path:'contact-us',component:ContactsUsComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'about-us',component:AboutUsComponent},
{path:'orders',component:OrdersComponent},
{path:'chat',component:ChatComponent},
{path:'update-user',component:UpdateUserComponent},
{path:'profile',component:ProfileComponent},
{path:'users',component:UsersComponent},



{path:'',redirectTo:'/home',pathMatch:'full'},






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  RegisterComponent,
  LoginComponent,
  GalleryComponent,
  HomeComponent,
  ContactsUsComponent,
  AboutUsComponent,
  ChatComponent,
  ProfileComponent,
  OrdersComponent,
  UsersComponent,
  ProductsComponent,
  UpdateUserComponent
]
