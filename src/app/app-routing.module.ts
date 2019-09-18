import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RestaurantDetailsComponent} from './restaurant-details/restaurant-details.component';
import {SearchResultComponent} from './search-page/search-result/search-result.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'restaurant',
    component: RestaurantDetailsComponent
  },
   {
    path: 'search-result',
    component: SearchResultComponent
  }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
