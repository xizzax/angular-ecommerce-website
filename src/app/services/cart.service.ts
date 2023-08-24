import { Injectable } from '@angular/core';
import { IceCream } from './ice-cream.model';
import {CartObject} from './cart.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartObject[] = [];

  constructor() {}

  addToCart(iceCream: IceCream) {
    if (this.cart.find((iceCreamName) => iceCreamName.name === iceCream.name)) {
      this.cart.find(
        (iceCreamName) => iceCreamName.name === iceCream.name
      )!.quantity += 1;
    } else {
      this.cart.push({
        name: iceCream.name,
        price: iceCream.price,
        quantity: 1,
        imgUrl: iceCream.imgurl,
      });
    }
  }

  getCart() {
    console.log(this.cart);
    return this.cart;
  }

  
}
