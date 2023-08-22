import { Component } from '@angular/core';
import { ToggleBtnService } from '../services/toggle-btn.service';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { Router, ActivatedRoute, NavigationEnd,  } from '@angular/router';
import { Subscription } from 'rxjs';
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
  activeNavBarItem: number = 0;
  navbarItems = [
    'Home',
    'Store',
    'Cart',
    'Our-Story'
  ];

  private routerSubscription!: Subscription;
  currentPath!: string;

  constructor(
    public buttonService: ToggleBtnService,
    private router: Router,
    private route: ActivatedRoute,
    ) { 
      this.currentPath = this.router.url

      this.routerSubscription = this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          this.currentPath = this.router.url
          console.log(this.currentPath);
          if (this.currentPath === '/') { this.activeNavBarItem = 0; }
          else if (this.currentPath === '/store') { this.activeNavBarItem = 1; }
          else if (this.currentPath === '/cart') { this.activeNavBarItem = 2; }
          else if (this.currentPath === '/our-story') { this.activeNavBarItem = 3; }
          else{
            this.activeNavBarItem = -1;
          }
        }
      });
    }

    ngOnDestroy() {
      this.routerSubscription.unsubscribe();
    }

  setActiveNavBarItem(index: number) {
    this.activeNavBarItem = index;
    this.buttonService.isToggled = false;
    // navigate to the page
    this.router.navigate([this.navbarItems[index].toLowerCase()]);
  }
}