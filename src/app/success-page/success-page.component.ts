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
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css'],
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
        style({ opacity: 0, transform: 'scale(0) translateX(300px)' }),
        animate(
          '300ms ease-in-out',
          style({ opacity: 1, transform: 'scale(1) translateX(0px)' })
        ),
      ]),
    ]),
  ]
})
export class SuccessPageComponent {

}
