import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ToggleBtnComponent } from './home-page/toggle-btn/toggle-btn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarContainerComponent } from './home-page/sidebar-container/sidebar-container.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ToggleBtnComponent,
    SidebarContainerComponent,
    NotFoundComponent,
    ViewCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
