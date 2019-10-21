import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from './filter/filter.component';
import {RestaurantComponent} from './restaurant.component';
import {RestaurantBannerComponent} from './restaurant-banner/restaurant-banner.component';
import {RightSidebarComponent} from './right-sidebar/right-sidebar.component';
import {CartComponent} from './cart/cart.component';
import {ProductListComponent} from './product-list/product-list.component';
import {AppRoutingModule} from '../../app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';
import {LayoutModule} from '../layout/layout.module';


@NgModule({
  declarations: [FilterComponent, RestaurantComponent, RestaurantBannerComponent, RightSidebarComponent, CartComponent, ProductListComponent, LeftSidebarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ]
})
export class RestaurantModule {
}
