import {Component, Input, OnInit} from '@angular/core';
import {ProductListComponent} from '../product-list/product-list.component';
import {Category} from '../../../models/category';
import {CategoryService} from '../../../service/Category/category.service';
import {Paging} from '../../../models/paging';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categoryList: Category[];
  filteredCategoryList: Category[];
  selectedCategory: number;

  @Input() productList: ProductListComponent;

  constructor(private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.getCategoryList();
    this.selectedCategory = 0;
  }


  getCategoryList() {
    this.categoryService.getCategories().subscribe(a => {
      this.categoryList = a as Category[];
    });
  }


  onSelectCategory(category) {
    this.selectedCategory = category.CategoryId;
    let filter: Paging = new Paging();
    filter.CategoryId = this.selectedCategory;
    filter.CategoryName = (this.selectedCategory === 0) ? '' : this.categoryList.filter(a => a.id === this.selectedCategory)[0].name;
    this.productList.setFilters(filter);
  }


}
