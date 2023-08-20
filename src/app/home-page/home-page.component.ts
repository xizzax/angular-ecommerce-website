import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';
import { ToggleBtnService } from '../services/toggle-btn.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('toggleAnimation', [
      state(
        'hidden',
        style({
          transform: 'translateX(0%)',
          display: 'block',
        })
      ),
      state(
        'visible',
        style({
          transform: 'translateX(-25%)',
          display: 'block',
        })
      ),
      transition('hidden <=> visible', animate('500ms ease-in-out')),
    ]),

    trigger('sidebarAnimation', [
      state(
        'hidden',
        style({
          transform: 'translateX(150%)',
          opacity: '0',
        })
      ),
      state(
        'visible',
        style({
          transform: 'translateX(0%)',
          opacity: '1',
        })
      ),
      transition('hidden <=> visible', animate('500ms ease-in-out')),
    ]),


  ],
})
export class HomePageComponent {


  screenWidth?: number = window.innerWidth;

  // injecting the service in constructor 
  constructor(public buttonService: ToggleBtnService) { 
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event']) // event listener for window resize
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    // create a variable which stores window's current width and in frontend 
    // we can use this variable to show/hide elements
    if (window.innerWidth <= 950) { // Adjust the breakpoint as needed

      // now updating that service and where ever this buttonService.isToggled
      // is used the toggle will take its effect
      this.buttonService.isToggled = false;

      this.screenWidth = window.innerWidth;
    } else if (window.innerWidth > 950) {
      this.screenWidth = window.innerWidth;
      // this.isToggled = true;
    }
  }

}
