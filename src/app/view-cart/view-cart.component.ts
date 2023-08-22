import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css'],
  animations: [

    trigger('itemsAnimation', [
			transition('* => *', [
				query('@fadeIn', [
					stagger(200, [
						animateChild()
					]),
				], { optional: true })
			]),
		]),
    
    trigger('fadeIn', [
      transition(':enter', [
        style({
          transform: 'translate3d(-10px,-10px,0)',
          opacity: 0
        }),
        animate('0.25s', style({
          transform: 'translate3d(0,0,0)',
          opacity: 1
        }))
      ]),
    ]),

    trigger('slideInfromRight', [
      transition(':enter', [
        style({
          transform: 'translate3d(20px, 0px,0)',
          opacity: 0
        }),
        animate('0.35s', style({
          transform: 'translate3d(0,0,0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class ViewCartComponent {
  isHovered: boolean = false;

  toggleHover() {
    this.isHovered = !this.isHovered;
  }
}
