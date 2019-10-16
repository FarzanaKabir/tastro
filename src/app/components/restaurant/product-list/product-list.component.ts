import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../service/Product/product.service';
import {Ingredients} from '../../../models/ingredients';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    return this
      .productService
      .getProducts()
      .subscribe(data => {
        this.productList = data.ingredients;
      });
  }
}

