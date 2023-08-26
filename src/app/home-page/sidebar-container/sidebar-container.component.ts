import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { IceCream } from 'src/app/services/ice-cream.model';
import { ToggleBtnService } from 'src/app/services/toggle-btn.service';

@Component({
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.css']
})
export class SidebarContainerComponent {

  @Input() iceCreamData: IceCream | null = null;

  constructor(private service:CartService, private router: Router, 
    private buttonService: ToggleBtnService, private toastr: ToastrService){}

  navigateToProductDetails(iceCreamData: IceCream) {
    // a bug was happening where navbar would not go in its orignal position only from home screen items
    this.buttonService.isToggled = false 
    const queryParams = { name: iceCreamData?.name.replace(/ /g, "-") };
    const navigationExtras = {
      queryParams,
      state: { iceCreamData }
    };
    this.router.navigate(['store/product-details'], navigationExtras);
  }

  add_to_cart(event: Event, iceCreamData:IceCream){
    event.stopPropagation(); // Prevent event from propagating
    this.service.addToCart(iceCreamData);
    this.toastr.success('Item added to cart')

  }
}
