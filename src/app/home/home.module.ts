import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HeroComponent} from './hero/hero.component';
import {RestaurantsNearbyComponent} from './restaurants-nearby/restaurants-nearby.component';
import {TastroForBusinessComponent} from './tastro-for-business/tastro-for-business.component';
import {FindOurCitiesComponent} from './find-our-cities/find-our-cities.component';
import {SayingAboutUsComponent} from './saying-about-us/saying-about-us.component';
import {NewsletterComponent} from './newsletter/newsletter.component';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [HomeComponent, HeroComponent, RestaurantsNearbyComponent, TastroForBusinessComponent, FindOurCitiesComponent, SayingAboutUsComponent, NewsletterComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
