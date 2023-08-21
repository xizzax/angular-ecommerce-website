import { Injectable } from '@angular/core';
import { IceCream } from './ice-cream.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: IceCream[] = [];

  constructor() { }

  addToCart(iceCream: IceCream){
    this.cart.push(iceCream);
    console.log(`${iceCream.name} added to cart`);
  };
}
