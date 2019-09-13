import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchNotResultComponent } from './search-not-result/search-not-result.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from '../app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [SearchPageComponent, NavbarComponent, SearchResultComponent, SearchNotResultComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class SearchPageModule { }
