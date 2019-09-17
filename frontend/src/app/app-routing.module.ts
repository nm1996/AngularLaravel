import { EditComponent } from './features/cart-checkout/pages/cart/edit/edit.component';
import { CartComponent } from './features/cart-checkout/pages/cart/cart.component';
import { MenProductComponent } from './features/products/pages/men-product/men-product.component';

import { ContactComponent } from './shared/components/contact/contact.component';
import { AuthorComponent } from './shared/components/author/author.component';
import { CheckoutComponent } from './features/cart-checkout/pages/checkout/checkout.component';
import { ProductDetailsComponent } from './features/products/pages/product-details/product-details.component';
import { KidsProductComponent } from './features/products/pages/kids-product/kids-product.component';
import { WomenProductComponent } from './features/products/pages/women-product/women-product.component';
import { LoginComponent } from './features/authorization/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './features/authorization/registration/registration.component';
import { SportsProductComponent } from './features/products/pages/sports-product/sports-product.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "login", component: LoginComponent },
  { path: "men-products", component: MenProductComponent },
  { path: "women-products", component: WomenProductComponent },
  { path: "kids-products", component: KidsProductComponent },
  { path: "sports-products", component: SportsProductComponent },
  { path: "product-details/:id", component: ProductDetailsComponent },
  { path: "cart/:id", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "author", component: AuthorComponent },
  { path: "cart/edit/:id", component: EditComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
