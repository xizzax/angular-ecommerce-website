import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  animateChild,
} from '@angular/animations';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query('@slideIn', [stagger(100, [animateChild()])], { optional: true }),
      ]),
    ]),
    trigger('leftAnimation', [
      transition('* => *', [
        query('@slideInfromLeft', [stagger(200, [animateChild()])], {
          optional: true,
        }),
      ]),
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({
          transform: 'translate3d(-10px,-10px,0)',
          opacity: 0,
        }),
        animate(
          '0.1s',
          style({
            transform: 'translate3d(0,0,0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
    trigger('slideInfromLeft', [
      transition(':enter', [
        style({
          transform: 'translate3d(-20px, 0px,0)',
          opacity: 0,
        }),
        animate(
          '0.35s',
          style({
            transform: 'translate3d(0,0,0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class ProductDetailsComponent {
  iceCreamData: any = null;
  quantity: number = 0;
  constructor(private route: ActivatedRoute, private service: CartService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const name = params['name'];

      console.log(name);

      console.log(history.state); // to get navigation data

      this.iceCreamData = history.state.iceCreamData;

      if (
        this.service.cart.find(
          (item) => item.iceCream.name === this.iceCreamData.name
        )
      ) {
        this.quantity = this.service.cart.find(
          (item) => item.iceCream.name === this.iceCreamData.name
        )!.quantity;
      }
    });
  }

  add_to_cart(event: Event) {
    this.service.addToCart(this.iceCreamData);
    if (
      this.service.cart.find(
        (item) => item.iceCream.name === this.iceCreamData.name
      )
    ) {
      this.quantity = this.service.cart.find(
        (item) => item.iceCream.name === this.iceCreamData.name
      )!.quantity;
    }
  }

  subtract_from_cart(event: Event) {
    this.service.subtractFromCart(this.iceCreamData);

    if (
      this.service.cart.find(
        (item) => item.iceCream.name === this.iceCreamData.name
      )
    ) {
      this.quantity = this.service.cart.find(
        (item) => item.iceCream.name === this.iceCreamData.name
      )!.quantity;
    }
  }
}
