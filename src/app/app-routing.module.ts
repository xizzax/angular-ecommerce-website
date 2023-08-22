import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StorePageComponent } from './store-page/store-page.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component:  HomePageComponent},
  { path: 'home', redirectTo:  ''},
  { path: 'store', component:  StorePageComponent},
  { path: 'cart', component:  ViewCartComponent},
  { path: 'product-details', component:  ProductDetailsComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
