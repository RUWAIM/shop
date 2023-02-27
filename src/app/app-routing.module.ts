import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CategoriesComponent } from './categories/categories.component';
import { DealComponent } from './deal/deal.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ShopNowComponent } from './shop-now/shop-now.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'copound',component:CardComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'home',component:HomeComponent},
{path:'deals',component:DealComponent},
{path:'new',component:NewComponent},
{path:'delivery',component:DeliveryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
