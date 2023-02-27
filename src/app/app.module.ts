import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompountComponent } from './compount/compount.component';
import { ShopNowComponent } from './shop-now/shop-now.component';
import { CardComponent } from './card/card.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { DealComponent } from './deal/deal.component';
import { NewComponent } from './new/new.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompountComponent,
    ShopNowComponent,
    CardComponent,
    CategoriesComponent,
    HomeComponent,
    DealComponent,
    NewComponent,
    DeliveryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
