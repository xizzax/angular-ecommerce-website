import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service:CartService, private router: Router){}

  navigateToProductDetails(iceCreamData: IceCream) {

    const queryParams = { name: iceCreamData?.name.replace(/ /g, "-") };
    const navigationExtras = {
      queryParams,
      state: { iceCreamData }
    };

    this.router.navigate(['/product-details'], navigationExtras);
  }

  add_to_cart(event: Event, iceCreamData:IceCream){
    event.stopPropagation(); // Prevent event from propagating
    this.service.addToCart(iceCreamData);
  }
}
