import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { KidsProductComponent } from './components/products/kids-product/kids-product.component';
import { WomenProductComponent } from './components/products/women-product/women-product.component';
import { ManProductComponent } from './components/products/man-product/man-product.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SportsProductComponent } from './components/products/sports-product/sports-product.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "man-products", component: ManProductComponent },
  { path: "women-products", component: WomenProductComponent },
  { path: "kids-products", component: KidsProductComponent },
  { path: "sports-products", component: SportsProductComponent },
  { path: "product-details/:id", component: ProductDetailsComponent },
  { path: "cart/:id", component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
