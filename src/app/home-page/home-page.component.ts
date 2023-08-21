import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent, query, stagger } from '@angular/animations';
import { ToggleBtnService } from '../services/toggle-btn.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDragMove,
} from '@angular/cdk/drag-drop';
import { IceCreamDataService } from '../services/ice-cream-data.service';
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
    trigger('imageAnimation', [
      transition('* => *', [
        style({ transform: 'scale(0.5)' }),
        animate('100ms ease-in-out', style({ transform: 'scale(1)' })),
        animate('100ms ease-in-out', style({ transform: 'translateX(-2px)' })),
        animate('100ms ease-in-out', style({ transform: 'translateX(2px)' })),
        animate('100ms ease-in-out', style({ transform: 'translateX(0px)' })),
      ]),
    ]),
  ],
})
export class HomePageComponent {

  screenWidth?: number = window.innerWidth;

  // injecting the service in constructor 
  constructor(public buttonService: ToggleBtnService,
    public iceCreamService: IceCreamDataService,
    ) { 
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

  trigger = false;
  idxHover = -1;
  isCircleDragged = false;
  isDivHovered = false;

  onDragStarted() {
    this.isCircleDragged = true; // Reset the hover state
  }

  onDragEnded() {
    // Handle drag end if needed
    this.isCircleDragged = false;
    // this.iceCreamService.selectedIceCream = this.iceCreamService.iceCreamData[this.idxHover];

    console.log(this.idxHover);
    // if div is being hovered then select that
  }

  onMouseEnter(idx: number) {
    if(!this.isCircleDragged){
      return;
    }
    this.idxHover = idx;
    this.isDivHovered = true;
    this.trigger = true;

    this.iceCreamService.selectedIceCream = this.iceCreamService.iceCreamData[idx];
    
  }

  

  onMouseOut() {
    this.isDivHovered = false;
    this.trigger = false;
  }
}
