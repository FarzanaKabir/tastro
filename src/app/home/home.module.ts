import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HeroComponent} from './hero/hero.component';
import {RestaurantsNearbyComponent} from './restaurants-nearby/restaurants-nearby.component';
import {TastroForBusinessComponent} from './tastro-for-business/tastro-for-business.component';
import {FindOurCitiesComponent} from './find-our-cities/find-our-cities.component';
import {SayingAboutUsComponent} from './saying-about-us/saying-about-us.component';
import {NewsletterComponent} from './newsletter/newsletter.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [HomeComponent, HeroComponent, RestaurantsNearbyComponent, TastroForBusinessComponent, FindOurCitiesComponent, SayingAboutUsComponent, NewsletterComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class HomeModule {
}
