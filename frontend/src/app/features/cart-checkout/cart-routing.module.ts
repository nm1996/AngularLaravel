import { CheckoutComponent } from "./pages/checkout/checkout.component";
import { CartComponent } from "./pages/cart/cart.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { EditComponent } from "./pages/cart/edit/edit.component";

const routes: Routes = [
  { path: "cart/:id", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "cart/edit/:id", component: EditComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
