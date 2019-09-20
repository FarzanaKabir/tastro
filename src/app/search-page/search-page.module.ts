import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPageComponent} from './search-page.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchNotResultComponent} from './search-not-result/search-not-result.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from '../app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {BreadcumComponent} from './search-result/breadcum/breadcum.component';
import {ItemListComponent} from './search-result/item-list/item-list.component';
import {MapComponent} from './search-result/map/map.component';
import { FilterComponent } from './search-result/filter/filter.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [SearchPageComponent, NavbarComponent, SearchResultComponent, SearchNotResultComponent, BreadcumComponent, ItemListComponent, MapComponent, FilterComponent],
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
    MatInputModule,
   NgxPaginationModule
  ]
})
export class SearchPageModule {
}
