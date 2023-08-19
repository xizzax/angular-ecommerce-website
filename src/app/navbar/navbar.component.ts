import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeNavBarItem = 0;
  navbarItems = [
    'Home',
    'Our Story',
    'About',
    'Contact'
  ]
  setActiveNavBarItem(index: number) {
    this.activeNavBarItem = index;
  }
}
