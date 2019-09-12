import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchNotResultComponent } from './search-not-result/search-not-result.component';




@NgModule({
  declarations: [SearchPageComponent, NavbarComponent, SearchResultComponent, SearchNotResultComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchPageModule { }
