import { FormsModule, NgModel, ReactiveFormsModule } from "@angular/forms";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";
import { ProductDetailsComponent } from "./pages/product-details/product-details.component";
import { KidsProductComponent } from "./pages/kids-product/kids-product.component";
import { WomenProductComponent } from "./pages/women-product/women-product.component";
import { MenProductComponent } from "./pages/men-product/men-product.component";
import { NgModule } from "@angular/core";
import { SportsProductComponent } from "./pages/sports-product/sports-product.component";
import { CommonModule } from "@angular/common";
import { ProductService } from "./services/products/product.service";
import { JwPaginationComponent } from "jw-angular-pagination";

@NgModule({
  declarations: [
    MenProductComponent,
    WomenProductComponent,
    KidsProductComponent,
    SportsProductComponent,
    ProductDetailsComponent,
    ProductsComponent,
    JwPaginationComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [JwPaginationComponent],
  providers: [ProductService]
})
export class ProductsModule {}
