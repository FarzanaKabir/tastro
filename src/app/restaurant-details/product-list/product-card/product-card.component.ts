import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../service/Product/product.service';
import {ToastrService} from 'ngx-toastr';
import {DataService} from '../../../service/Shared/data.service';
import {Ingredients} from '../../../models/ingredients';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('productData') product: Product;
  quantity: number;
  @Input() productId: number;
  @Input() isHomePage: boolean;
  messge: string;

  constructor(private productService: ProductService,
              private toastr: ToastrService,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.quantity = 1;
    this.dataService.currentMessage.subscribe(msg => this.messge = msg);
  }
 onAddProductToCart() {
    let product: Ingredients;
    this.productService.getProductDetailsById(this.productId)
      .subscribe(p => {
        // @ts-ignore
        product = p as Ingredients;
        // @ts-ignore
        product.unitAmount = this.quantity;
        let cart: Ingredients[] = JSON.parse(localStorage.getItem('Cart'));
        if (cart == null) {
          cart = [];
          cart.push(product);
        } else {
          const currentProduct = cart.filter(a => a.ProductId === product.ProductId);
          if (currentProduct.length > 0) {
            cart.filter(a => {
              a.unitAmount = a.unitAmount + this.quantity;
            });
          } else {
            cart.push(product);
          }
        }
        // @ts-ignore
        this.dataService.updateCartItemCount()(cart.length);
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
