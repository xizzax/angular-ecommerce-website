import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css'],
  animations: [

    trigger('fadeInWith', [
      transition(':enter', [
        style({ opacity: 0,  transform: 'translateY(-10px)' }),
        animate('400ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)'  })),
      ]),
    ]),

  ]
})
export class ViewCartComponent {
  isHovered: boolean = false;

  toggleHover() {
    this.isHovered = !this.isHovered;
  }
}
