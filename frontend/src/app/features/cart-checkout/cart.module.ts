import { FormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartCheckoutComponent } from './cart-checkout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './pages/cart/edit/edit.component';



@NgModule({
  declarations: [
    CartCheckoutComponent,
    CartComponent,
    CheckoutComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ]
})
export class CartModule { }
