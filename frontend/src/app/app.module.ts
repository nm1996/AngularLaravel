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
import { HomeComponent } from './shared/components/home/home.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { LoginComponent } from './features/authorization/login/login.component';
import { RegistrationComponent } from './features/authorization/registration/registration.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TokenService } from './shared/services/token/token.service';
import { WomenProductComponent } from './features/products/pages/women-product/women-product.component';
import { KidsProductComponent } from './features/products/pages/kids-product/kids-product.component';
import { SportsProductComponent } from './features/products/pages/sports-product/sports-product.component';
import { ProductDetailsComponent } from './features/products/pages/product-details/product-details.component';
import { CheckoutComponent } from './features/cart-checkout/pages/checkout/checkout.component';
import { AuthorComponent } from './shared/components/author/author.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { MenProductComponent } from './features/products/pages/men-product/men-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    MenProductComponent,
    WomenProductComponent,
    KidsProductComponent,
    SportsProductComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    AuthorComponent,
    EditComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TokenService,
    JarService,
    AuthService,
    ProductService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
