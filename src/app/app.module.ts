import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {OwlModule} from 'ngx-owl-carousel';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {LoginComponent} from './components/Auth/login/login.component';
import {RegisterComponent} from './components/Auth/register/register.component';
import {PaginationComponent} from './shared/pagination/pagination.component';
import {ToastrModule} from 'ngx-toastr';
import {RestaurantModule} from './components/restaurant/restaurant.module';
import {LayoutModule} from './components/layout/layout.module';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {HomeModule} from './components/home/home.module';
import {SearchPageModule} from './components/search-page/search-page.module';
import {AccountComponent} from './components/Auth/account/account.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {CheckoutNavbarComponent} from './components/checkout/checkout-navbar/checkout-navbar.component';
import {PaginationModule} from './components/pagination/pagination.module';
import {OrderConfirmationComponent} from './components/order-confirmation/order-confirmation.component';
import {CategoryModule} from './components/category/category.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PaginationComponent,
    ShoppingCartComponent,
    AccountComponent,
    CheckoutComponent,
    CheckoutNavbarComponent,
    OrderConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FontAwesomeModule,
    OwlModule,

    RestaurantModule,
    LayoutModule,
    HomeModule,
    SearchPageModule,
    PaginationModule,
    CategoryModule,

    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ToastrModule.forRoot(),


    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
