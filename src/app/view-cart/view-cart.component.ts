import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger, animateChild } from '@angular/animations';
import { CartService } from '../services/cart.service';
import { CartObject } from '../services/cart.model';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css'],
  animations: [

    trigger('itemsAnimation', [
			transition('* => *', [
				query('@fadeIn', [
					stagger(200, [
						animateChild()
					]),
				], { optional: true })
			]),
		]),
    
    trigger('fadeIn', [
      transition(':enter', [
        style({
          transform: 'translate3d(-10px,-10px,0)',
          opacity: 0
        }),
        animate('0.25s', style({
          transform: 'translate3d(0,0,0)',
          opacity: 1
        }))
      ]),
    ]),

    trigger('slideInfromRight', [
      transition(':enter', [
        style({
          transform: 'translate3d(20px, 0px,0)',
          opacity: 0
        }),
        animate('0.35s', style({
          transform: 'translate3d(0,0,0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class ViewCartComponent {
  isHovered: boolean = false;

  currentCart: CartObject[] = [];
  total:number  = 0;
  constructor(private service:CartService){
    this.currentCart = service.getCart();
    this.total = this.currentCart.reduce((acc,curr) => acc + curr.price*curr.quantity,0);
  }

  toggleHover() {
    this.isHovered = !this.isHovered;
  }

  add_to_cart(event: Event, iceCreamData:CartObject){
    event.stopPropagation(); // Prevent event from propagating
    this.currentCart.find((item) => item.name === iceCreamData.name)!.quantity++;
    this.total = this.currentCart.reduce((acc,curr) => acc + curr.price*curr.quantity,0);
  }

  subtract_from_cart(event: Event, iceCreamData:CartObject){
    event.stopPropagation(); // Prevent event from propagating
    this.currentCart.find((item) => item.name === iceCreamData.name)!.quantity--;
    //if quantity is 0, remove from cart
    if(this.currentCart.find((item) => item.name === iceCreamData.name)!.quantity === 0){
      this.currentCart = this.currentCart.filter((item) => item.name !== iceCreamData.name);
    }
    this.total = this.currentCart.reduce((acc,curr) => acc + curr.price*curr.quantity,0);
  }

  remove_from_cart(event: Event, iceCreamData:CartObject){
    event.stopPropagation(); // Prevent event from propagating
    this.currentCart = this.currentCart.filter((item) => item.name !== iceCreamData.name);
    this.total = this.currentCart.reduce((acc,curr) => acc + curr.price*curr.quantity,0);
  }
}
