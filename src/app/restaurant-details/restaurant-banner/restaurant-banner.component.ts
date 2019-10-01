import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-restaurant-banner',
  templateUrl: './restaurant-banner.component.html',
  styleUrls: ['./restaurant-banner.component.scss']
})
export class RestaurantBannerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $(document).ready(() => {
      // executes when HTML-Document is loaded and DOM is ready
      console.log('document is ready');


      $('[data-toggle="offcanvas"], #navToggle').on('click', () => {
        $('.offcanvas-collapse').toggleClass('open');
      });
    });

    window.onload = () => {
      // executes when complete page is fully loaded, including all frames, objects and images
      console.log('window is loaded');
    };

  }

}
