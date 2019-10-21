import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RestaurantComponent} from './components/restaurant/restaurant.component';
import {SearchResultComponent} from './components/search-page/search-result/search-result.component';
import {SearchNotResultComponent} from './components/search-page/search-not-result/search-not-result.component';
import {CartComponent} from './components/restaurant/cart/cart.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurant',
    pathMatch: 'full',
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: 'restaurant',
    component: RestaurantComponent
  },
  {
    path: 'search-result',
    component: SearchResultComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    children: [
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
    ]
  },

  {
    path: '*', redirectTo: 'restaurant', pathMatch: 'full'
  }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
