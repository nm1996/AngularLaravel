import { EditComponent } from "./features/cart-checkout/pages/cart/edit/edit.component";
import { CartComponent } from "./features/cart-checkout/pages/cart/cart.component";
import { CheckoutComponent } from "./features/cart-checkout/pages/checkout/checkout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./features/home/home.module#HomeModule"
  },
  {
    path: "products",
    loadChildren: "./features/products/products.module#ProductsModule"
  },
  {
    path: "admin",
    loadChildren: "./features/admin/admin.module#AdminModule"
  },
  { path: "authorization", loadChildren: "./features/authorization/authorization.module#AuthorizationModule" },
  { path: "buy", loadChildren: "./features/cart-checkout/cart.module#CartModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
