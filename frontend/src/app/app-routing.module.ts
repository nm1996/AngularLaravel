import { EditComponent } from './components/cart/edit/edit.component';
import { AuthorComponent } from './components/author/author.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { KidsProductComponent } from './components/products/kids-product/kids-product.component';
import { WomenProductComponent } from './components/products/women-product/women-product.component';
import { MenProductComponent } from './components/products/men-product/men-product.component';
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
  { path: "men-products", component: MenProductComponent },
  { path: "women-products", component: WomenProductComponent },
  { path: "kids-products", component: KidsProductComponent },
  { path: "sports-products", component: SportsProductComponent },
  { path: "product-details/:id", component: ProductDetailsComponent },
  { path: "cart/:id", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "author", component: AuthorComponent },
  { path: "cart/edit/:id", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
