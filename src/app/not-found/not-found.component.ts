import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  animateChild,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations:[
    trigger('staggerAnimation', [
      transition(':enter', [
        query(
          '@fadeIn',
          [stagger(100, [animateChild()])], { optional: true }),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0)' }),
        animate(
          '300ms ease-in-out',
          style({ opacity: 1, transform: 'scale(1)' })
        ),
      ]),
    ]),
  ]
})
export class NotFoundComponent {

}
