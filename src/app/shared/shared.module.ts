import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarContainerComponent } from '../home-page/sidebar-container/sidebar-container.component';

@NgModule({
  declarations: [
    SidebarContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarContainerComponent
  ]
})
export class SharedModule { }

