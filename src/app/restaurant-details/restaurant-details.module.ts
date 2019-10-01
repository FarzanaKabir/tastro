import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantDetailsComponent} from './restaurant-details.component';
import {DetailsComponent} from './details/details.component';
import {AppRoutingModule} from '../app-routing.module';
import {SearchPageModule} from '../search-page/search-page.module';
import {RestaurantBannerComponent} from './restaurant-banner/restaurant-banner.component';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';
import {RightSidebarComponent} from './right-sidebar/right-sidebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [RestaurantDetailsComponent, DetailsComponent, RestaurantBannerComponent, LeftSidebarComponent, RightSidebarComponent, CartComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SearchPageModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: []
})
export class RestaurantDetailsModule {
}
