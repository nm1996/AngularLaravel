import { EditComponent } from "./features/cart-checkout/pages/cart/edit/edit.component";
import { CartComponent } from "./features/cart-checkout/pages/cart/cart.component";
import { CheckoutComponent } from "./features/cart-checkout/pages/checkout/checkout.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./shared/services/guard/auth.guard";
import { AdminGuardGuard } from "./shared/services/guard/admin-guard.guard";
import { NoAuthGuardGuard } from "./shared/services/guard/no-auth-guard.guard";

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
    canActivate: [AdminGuardGuard],
    loadChildren: "./features/admin/admin.module#AdminModule"
  },
  {
    path: "authorization",
    canActivate: [NoAuthGuardGuard],
    loadChildren:
      "./features/authorization/authorization.module#AuthorizationModule"
  },
  {
    path: "buy",
    canActivate: [AuthGuard],
    loadChildren: "./features/cart-checkout/cart.module#CartModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
