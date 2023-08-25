import { Component } from '@angular/core';
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
import { CartService } from '../../services/cart.service';
import { CartObject } from '../../services/cart.model';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css'],
  animations: [
    trigger('itemsAnimation', [
      transition('* => *', [
        query('@fadeIn', [stagger(200, [animateChild()])], { optional: true }),
      ]),
    ]),

    trigger('fadeIn', [
      transition(':enter', [
        style({
          transform: 'translate3d(-10px,-10px,0)',
          opacity: 0,
        }),
        animate(
          '0.25s',
          style({
            transform: 'translate3d(0,0,0)',
            opacity: 1,
          })
        ),
      ]),
    ]),

    trigger('slideInfromRight', [
      transition(':enter', [
        style({
          transform: 'translate3d(20px, 0px,0)',
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
export class ViewCartComponent {
  isHovered: boolean = false;

  currentCart: CartObject[] = [];
  total: number = 0;
  constructor(private service: CartService, private http: HttpClient) {
    this.currentCart = service.getCart();
  }

  ngOnInit() {
    console.log('on init is called')
    console.log(this.service.getTotal())
    this.total = this.service.getTotal();

  }
  toggleHover() {
    this.isHovered = !this.isHovered;
  }

  add_to_cart(iceCreamData: CartObject) {
    console.log('Parent function is called from the child');

    this.service.addToCart(iceCreamData.iceCream);
    this.total = this.service.getTotal();
    this.currentCart = this.service.getCart();
  }

  subtract_from_cart(iceCreamData: CartObject) {
    this.service.subtractFromCart(iceCreamData.iceCream);
    this.total = this.service.getTotal();
    this.currentCart = this.service.getCart();
  }

  remove_from_cart(iceCreamData: CartObject) {
    this.service.removeFromCart(iceCreamData.iceCream);
    this.total = this.service.getTotal();
    this.currentCart = this.service.getCart();
  }

  clearCart(){

  }

  onCheckout(): void {

    this.http
      .post('http://localhost:4242/checkout', {
        items: this.currentCart,
      })
      .subscribe(async (res: any) => {
        console.log(res);
        let stripe = await loadStripe('pk_test_51NizL3HRBepfNKBjiXJ2aD0Dqc5njzjFDrLLFrso06bZX54gZi9EJ7BM7D3qhdFgZ8gNTQB48lLmX6KLCg1yRqpl002EXtrYe1');
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }

}
