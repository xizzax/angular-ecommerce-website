import { Component } from '@angular/core';
import { IceCreamDataService } from '../services/ice-cream-data.service';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css'],
  animations: [
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-10px)' }),
          stagger(100, animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class StorePageComponent {

  flavorFilter = '';
  ratingFilter = 0;
  pricingFilter = 0;

  constructor(public iceCreamService: IceCreamDataService,
  ) { }

  applyFilters() {
    console.log(this.flavorFilter);
    console.log(this.ratingFilter);
    console.log(this.pricingFilter);
  }


  resetFilters() {

  }

  

}
