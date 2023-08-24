import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartObject } from 'src/app/services/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  animations:[
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
  ]
})
export class CartItemComponent {
  @Input() item!: CartObject;
  @Output() subtract_from_cart= new EventEmitter();; 
  @Output() add_to_cart = new EventEmitter();;
  @Output() remove_from_cart = new EventEmitter();;

  isHovered: boolean = false;
  
  toggleHover() {
    this.isHovered = !this.isHovered;
  }

  add_to_cart_child(iceCreamData: CartObject) {
    console.log(iceCreamData)
    this.add_to_cart.emit(iceCreamData)
    
  }

  subtract_from_cart_child(iceCreamData: CartObject) {
    this.subtract_from_cart.emit(iceCreamData);
    
  }

  remove_from_cart_child(iceCreamData: CartObject) {
    this.remove_from_cart.emit(iceCreamData);
  }
}
