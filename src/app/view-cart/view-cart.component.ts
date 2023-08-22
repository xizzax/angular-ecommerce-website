import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css'],
  animations: [

    trigger('listAnimation', [
			transition('* => *', [
				query('@fadeInWith', [
					stagger(200, [
						animateChild()
					]),
				], { optional: true })
			]),
		]),

    trigger('fadeInWith', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('400ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('slideInfromLeft', [
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
