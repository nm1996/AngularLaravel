import { AuthorizationModule } from './features/authorization/authorization.module';
import { HomeModule } from './features/home/home.module';
import { EditComponent } from './features/cart-checkout/pages/cart/edit/edit.component';
import { CartComponent } from './features/cart-checkout/pages/cart/cart.component';
import { AuthService } from './shared/services/auth/auth.service';
import { AuthorService } from './shared/services/author/author.service';
import { ProductService } from './features/products/services/products/product.service';
import { HttpClientModule } from '@angular/common/http';

import { JarService } from './shared/services/jar/jar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenService } from './shared/services/token/token.service';
import { CheckoutComponent } from './features/cart-checkout/pages/checkout/checkout.component';
import { AdminComponent } from './features/admin/admin.component';
import { CartCheckoutComponent } from './features/cart-checkout/cart-checkout.component';
import { ProductsModule } from './features/products/products.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    ProductsModule,
    RouterModule
  ],
  providers: [
    TokenService,
    JarService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
