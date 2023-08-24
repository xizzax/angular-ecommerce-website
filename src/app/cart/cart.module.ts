import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent } from '../view-cart/cart-item/cart-item.component';
import { ViewCartComponent } from '../view-cart/view-cart.component';


@NgModule({
  declarations: [
    CartItemComponent,
    ViewCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,

  ]
})
export class CartModule { }
