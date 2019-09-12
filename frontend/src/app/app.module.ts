import { AuthorService } from './services/author/author.service';
import { ProductService } from './services/products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { JarService } from './services/jar/jar.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FooterComponent } from './components/footer/footer.component';
import { TokenService } from './services/token/token.service';
import { MenProductComponent } from './components/products/men-product/men-product.component';
import { WomenProductComponent } from './components/products/women-product/women-product.component';
import { KidsProductComponent } from './components/products/kids-product/kids-product.component';
import { SportsProductComponent } from './components/products/sports-product/sports-product.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthorComponent } from './components/author/author.component';

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
    AuthorComponent
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
