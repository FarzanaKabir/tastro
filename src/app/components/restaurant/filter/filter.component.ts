import {Component, Input, OnInit} from '@angular/core';
import {ProductListComponent} from '../product-list/product-list.component';
import {Category} from '../../../models/category';
import {Paging} from '../../../models/paging';
import {CategoryService} from '../../category/category.service';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private categoryService: CategoryService, private route: ActivatedRoute,
              private router: Router,
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

  setCategory(category: Category) {
    this
      .router
      .navigate([], {
        relativeTo: this.route,
        queryParams: {
          category: category.id
        },
        queryParamsHandling: 'merge'
      });
  }


}
