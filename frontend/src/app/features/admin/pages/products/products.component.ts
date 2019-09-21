import { DomSanitizer } from "@angular/platform-browser";
import { Component, OnInit } from "@angular/core";
import { ProductAdminService } from "../../services/product/product-admin.service";
import { Product } from "src/app/shared/models/product.model";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private product: ProductAdminService, public dom: DomSanitizer) {}

  ngOnInit() {
    this.product.getAllProducts().subscribe((response: Product[]) => {
      this.products = response;
    });
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((response: number) => {
      console.log(response);
    });
  }
}
