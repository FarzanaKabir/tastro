import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../service/Product/product.service';
import {Ingredients} from '../../../models/ingredients';
import {ToastrService} from 'ngx-toastr';
import {DataService} from '../../../service/Shared/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Ingredients[];
  quantity: number;
  message: string;

  constructor(private productService: ProductService,
              private toastr: ToastrService,
              private dataService: DataService) {
  }

  ngOnInit() {
    return this
      .productService
      .getProducts()
      .subscribe(data => {
        // @ts-ignore
        this.productList = data.category;
        this.quantity = 1;
        this.dataService.currentMessage.subscribe(msg => this.message = msg);
      });
  }

  onAddProductToCart() {
    let product: Ingredients;
    this.productService.getProducts()
      .subscribe(p => {
        product = product as Ingredients;
        product.unitAmount = this.quantity;
        let cart: Ingredients[] = JSON.parse(localStorage.getItem('Cart'));
        if (cart == null) {
          cart = [];
          cart.push(product);
        } else {
          const currentProduct = cart.filter(a => a.id === product.id);
          if (currentProduct.length > 0) {
            cart.filter(a => {
              a.unitAmount = a.unitAmount + this.quantity;
            });
          } else {
            cart.push(product);
          }
        }
        this.dataService.updateCartItemCount(cart.length);
        this.dataService.updateShoppingCart(cart);
        localStorage.setItem('Cart', JSON.stringify(cart));
        this.toastr.success('<i class="fas fa-check ml-1 pr-2"></i><strong>Product Added to the Cart</strong>', null, {
          timeOut: 3000,
          toastClass: 'toast-header',
          progressBar: true,
          progressAnimation: 'decreasing',
          closeButton: true,
          enableHtml: true
        });
      });

  }
}

