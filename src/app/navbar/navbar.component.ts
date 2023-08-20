import { Component } from '@angular/core';
import { ToggleBtnService } from '../services/toggle-btn.service';
import { trigger, state, style, animate, transition, } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('toggleAnimation', [
      state(
        'hidden',
        style({
          transform: 'translateX(0%)',
        })
      ),
      state(
        'visible',
        style({
          transform: 'translateX(-57.5%)',
        })
      ),
      transition('hidden <=> visible', animate('500ms ease-in-out')),
    ]),
  ]
})
export class NavbarComponent {
  activeNavBarItem = 0;
  navbarItems = [
    'Home',
    'Our Story',
    'About',
    'Contact'
  ]
  constructor(public buttonService: ToggleBtnService) {
  }
  setActiveNavBarItem(index: number) {
    this.activeNavBarItem = index;
  }
}
