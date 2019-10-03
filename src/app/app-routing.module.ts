import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestaurantDetailsComponent} from './restaurant-details/restaurant-details.component';
import {SearchResultComponent} from './search-page/search-result/search-result.component';
import {SearchNotResultComponent} from './search-page/search-not-result/search-not-result.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/restaurant',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: 'restaurant',
    component: RestaurantDetailsComponent
  },
   {
    path: 'search-result',
    component: SearchResultComponent
  },
  {
    path: '**',
    component: SearchNotResultComponent
  }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
