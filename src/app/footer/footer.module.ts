import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FooterTopComponent } from './footer-top/footer-top.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faFacebookF, faGooglePlusG, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [FooterComponent, FooterTopComponent, FooterBottomComponent, ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ]
})
export class FooterModule {
  constructor() {
    library.add(faFacebookF, faGooglePlusG, faTwitter, faInstagram);
  }
}
