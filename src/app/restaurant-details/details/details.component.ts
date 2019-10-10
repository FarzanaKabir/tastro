import {Component, Input, OnInit} from '@angular/core';
import {foodItem} from '../../typing';
import {ProductService} from '../../service/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  items$: Observable<any>;

  constructor(private productService: ProductService) {

    this.productService.getProducts().subscribe(re => console.log(re));
  }

  ngOnInit() {
    this.items$ = this.productService.getProducts();
  }


  getImage(type: string = 'foodItem', image: string): string {
    return 'https://soft-box.s3.us-east-2.amazonaws.com/' + type + '/' + image;
  }

  // promotions: FoodItem[] = [
  //   {
  //     id: 0,
  //     image: './assets/restaurant/photo1.png',
  //     title: 'Beef Taco Subi',
  //     text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce',
  //     emoji: './assets/restaurant/happy.png'
  //   },
  //   {
  //     id: 1,
  //     image: './assets/restaurant/photo2.png',
  //     title: 'Chikepia Quinoa Subi',
  //     text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce',
  //     emoji: './assets/restaurant/happy.png'
  //   },
  //   {
  //     id: 2,
  //     image: './assets/restaurant/photo3.png',
  //     title: 'Chikepia Quinoa Subi Salad',
  //     text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce',
  //     emoji: './assets/restaurant/happy.png'
  //   },
  //   {
  //     id: 3,
  //     image: './assets/restaurant/photo4.png',
  //     title: 'Remix Subi',
  //     text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce',
  //     emoji: './assets/restaurant/happy.png'
  //   },
  // ];
  // subi_meals: FoodItem[] = [
  //   {
  //     id: 4,
  //     image: './assets/restaurant/photo5.png',
  //     title: 'Beef Taco Subi',
  //     text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce',
  //     emoji: './assets/restaurant/happy.png'
  //   },
  //   {
  //     id: 5,
  //     image: './assets/restaurant/photo6.png',
  //     title: 'Beef Taco Subi',
  //     text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce',
  //     emoji: './assets/restaurant/happy.png'
  //   },
  //   {
  //     id: 6,
  //     image: './assets/restaurant/photo7.png',
  //     title: 'Beef Taco Subi',
  //     text: 'The new Taco Subi is filled with tasty Taco-flavored chicken of beef mince, crispy corn chips and the whole is crowned with Salsa sauce',
  //     emoji: './assets/restaurant/happy.png'
  //   },
  // ];

}
