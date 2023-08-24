import { Component } from '@angular/core';
import { IceCreamDataService } from '../../services/ice-cream-data.service';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  animateChild,
  state,
} from '@angular/animations';
import { IceCream } from '../../services/ice-cream.model';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css'],
  animations: [
    trigger('staggerAnimation', [
      transition(':enter', [
        query(
          '@fadeIn',
          [stagger(100, [animateChild()])], { optional: true }),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate(
          '300ms ease-in-out',
          style({ opacity: 1, transform: 'scale(1)' })
        ),
      ]),
      transition(':increment', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate(
          '300ms ease-in-out',
          style({ opacity: 1, transform: 'scale(1)' })
        ),
      ]),
    ]),
  ],
})
export class StorePageComponent {
  flavorFilter = '';
  ratingFilter = 0;
  pricingFilter = 0;
  replayAnimation = 0;

  iceCreams: IceCream[] = [];


  constructor(public iceCreamService: IceCreamDataService) {
    //creating a reference to the ice cream data
    this.iceCreams = iceCreamService.iceCreamData;
  }
  triggerAnimation = false; // Flag to control animation
  endAnim() {
    this.triggerAnimation = false;
  }
  ngAfterViewInit() {
    console.log('AfterContentInit');
    // this.replayAnimation ++;

  }

  applyFilters() {
    //called when "apply" button is clicked

    console.log(this.flavorFilter);
    console.log(this.ratingFilter);
    console.log(this.pricingFilter);

    const filteredIceCreamList: IceCream[] = [];

    for (let iceCream of this.iceCreamService.iceCreamData) {
      // console.log(iceCream);

      if (this.flavorFilter.length != 0) {
        if (
          iceCream.flavor.toLowerCase() == this.flavorFilter.toLowerCase() &&
          iceCream.rating >= this.ratingFilter &&
          iceCream.price >= this.pricingFilter
        ) {

          filteredIceCreamList.push(iceCream);
        }
      } else {
        if (
          iceCream.rating >= this.ratingFilter &&
          iceCream.price >= this.pricingFilter
        ) {
          filteredIceCreamList.push(iceCream);
        }
      }

    }

    this.iceCreams = filteredIceCreamList
    this.replayAnimation++;
    this.triggerAnimation = true;
    console.log(this.iceCreams);

  }

  resetFilters() {
    this.iceCreams = this.iceCreamService.iceCreamData;
    this.flavorFilter = "";
    this.ratingFilter = 0;
    this.pricingFilter = 0;
    this.replayAnimation++;
    this.triggerAnimation = !this.triggerAnimation;

  }
}
