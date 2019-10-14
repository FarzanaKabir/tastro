import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantDetailsComponent} from './restaurant-details.component';
import {AppRoutingModule} from '../app-routing.module';
import {SearchPageModule} from '../search-page/search-page.module';
import {RestaurantBannerComponent} from './restaurant-banner/restaurant-banner.component';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';
import {RightSidebarComponent} from './right-sidebar/right-sidebar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CartComponent} from './cart/cart.component';
import {MatTableModule} from '@angular/material/table';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCardComponent} from './product-list/product-card/product-card.component';

@NgModule({
  declarations: [RestaurantDetailsComponent, RestaurantBannerComponent, LeftSidebarComponent, RightSidebarComponent, CartComponent, ProductListComponent, ProductCardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SearchPageModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  exports: []
})
export class RestaurantDetailsModule {
}
