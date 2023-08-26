import { Injectable } from '@angular/core';
import { IceCream } from './ice-cream.model';
import { CartObject } from './cart.model';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartObject[]= [];
  total: number = 0;

  constructor() {
    if(localStorage.getItem("cart") != null){
      this.cart = JSON.parse(localStorage.getItem("cart")!);
      this.calculateTotal()
    }
  }

  addToCart(iceCream: IceCream) {
    if (this.cart.find((item) => item.iceCream['name'] === iceCream.name)) {
      this.cart.find((item) => item.iceCream['name'] === iceCream.name)![
        'quantity'
      ]++;
    } else {
      this.cart.push({ iceCream: iceCream, quantity: 1 });
    }
    this.calculateTotal();

    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  getCart() {
    // console.log(this.cart);
    return this.cart;
  }

  getTotal() {
    return this.total;
  }

  calculateTotal() {
    this.total = 0;
    for(let item of this.cart){
      this.total += item.iceCream.price * item.quantity;
    }
  }

  subtractFromCart(iceCream: IceCream) {
    this.cart.find((item) => item.iceCream['name'] === iceCream.name)![
      'quantity'
    ]--;
    //if quantity is 0, remove from cart
    if (
      this.cart.find((item) => item.iceCream['name'] === iceCream.name)![
        'quantity'
      ] === 0
    ) {
      this.cart = this.cart.filter(
        (item) => item.iceCream['name'] !== iceCream.name
      );
    }
    this.calculateTotal();

    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  removeFromCart(iceCream: IceCream) {
    this.cart = this.cart.filter(
      (item) => item.iceCream['name'] !== iceCream.name
    );
    this.calculateTotal();  

    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  clearCart(){
    this.cart = [];
    this.calculateTotal();

    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
