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
import {OwlModule} from 'ngx-owl-carousel';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PaginationComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FontAwesomeModule,
    OwlModule,

    HomeModule,
    FooterModule,
    SearchPageModule,
    RestaurantDetailsModule,

    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ToastrModule.forRoot(),


    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
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
