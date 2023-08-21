import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.css']
})
export class SidebarContainerComponent {
  @Input() iceCreamTitle: string = "";
  @Input() iceCreamDescription: string = "";
  @Input() iceCreamImage : string = "";
}
