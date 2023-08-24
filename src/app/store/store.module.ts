import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StorePageComponent } from './store-page/store-page.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StorePageComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule,
    SharedModule
  ]
})

export class StoreModule { }
