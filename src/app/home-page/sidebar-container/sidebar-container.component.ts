import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IceCream } from 'src/app/services/ice-cream.model';
@Component({
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.css']
})
export class SidebarContainerComponent {
  // @Input() iceCreamTitle: string = "";
  // @Input() iceCreamDescription: string = "";
  // @Input() iceCreamImage : string = "";

  @Input() iceCreamData: IceCream | null = null;

  constructor(private service:CartService){}


  add_to_cart(iceCreamData:IceCream){
    this.service.addToCart(iceCreamData);
  }
}
