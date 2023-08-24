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
import { IceCream } from '../services/ice-cream.model';
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
    trigger('fadeInWith', [
      transition(':enter', [
        style({ opacity: 0,  transform: 'translateY(-10px)' }),
        animate('400ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)'  })),
      ]),
    ]),
  ],
})
export class HomePageComponent {

  screenWidth?: number = window.innerWidth;
  patternIceCreams: IceCream[] = [];
  // injecting the service in constructor 
  constructor(public buttonService: ToggleBtnService,
    public iceCreamService: IceCreamDataService,
    ) { 
    this.checkWindowSize();
  }

  ngOnInit(){
    this.patternIceCreams = this.iceCreamService.getPatternIceCreams();
  }


  @HostListener('window:resize', ['$event']) // event listener for window resize
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.patternIceCreams = this.iceCreamService.getPatternIceCreams();
    if (window.innerWidth <= 950) { 

      this.buttonService.isToggled = false;

      this.screenWidth = window.innerWidth;
  
    } else if (window.innerWidth > 950) {
      this.screenWidth = window.innerWidth;
      // this.isToggled = true;
    }
    if(window.innerWidth <= 950){
      this.patternIceCreams = this.patternIceCreams.slice(0, 4);
    }
    if(window.innerWidth <= 650){
      this.patternIceCreams = this.patternIceCreams.slice(0, 3);
    }
    if(window.innerWidth <= 450){
      this.patternIceCreams = this.patternIceCreams.slice(0, 2);
    }
  }
  getClasses(i: number){
    if(window.innerWidth>950){
      return {
        'mt-24': i == 0 || i == 4,
        'mt-16': i == 1 || i == 3,
        'mt-8': i == 2
      }
    }else if(window.innerWidth<=950 && window.innerWidth>650){
      return {
        'mt-24': i == 0 || i == 3,
        'mt-16': i == 1 || i == 2,
      }
    }else if(window.innerWidth<=650 && window.innerWidth>450){
      return {
        'mt-24': i == 0 || i == 2,
        'mt-16': i == 1,
      }
    }else if(window.innerWidth<=450){
      return {
        'mt-24': i == 0 || i == 1,
      }
    }
    return 'mt-16'
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
