import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {FooterTopComponent} from './footer/footer-top/footer-top.component';
import {FooterBottomComponent} from './footer/footer-bottom/footer-bottom.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [LayoutComponent, NavbarComponent, FooterComponent, FooterTopComponent, FooterBottomComponent],
  exports: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class LayoutModule {
}
