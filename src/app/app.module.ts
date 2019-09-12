import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {HomeModule} from './home/home.module';
import {HttpClientModule} from '@angular/common/http';
import {FooterModule} from './footer/footer.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SearchPageModule} from './search-page/search-page.module';
import {RestaurantDetailsModule} from './restaurant-details/restaurant-details.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FontAwesomeModule,

    HomeModule,
    FooterModule,
    SearchPageModule,
    RestaurantDetailsModule,

    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
