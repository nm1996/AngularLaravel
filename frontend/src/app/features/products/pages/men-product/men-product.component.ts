import { TokenService } from "./../../../../shared/services/token/token.service";
import { LikeService } from "./../../services/like/like.service";
import { ProductService } from "./../../services/products/product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../../../../shared/models/product.model";

@Component({
  selector: "app-men-product",
  templateUrl: "./men-product.component.html",
  styleUrls: ["./men-product.component.scss"]
})
export class MenProductComponent implements OnInit {
  products: Product[];
  user_id: number;
  productsPagionation: Product[];
  pageOfItems: Array<any>;
  show: number = 9;

  constructor(
    private menProducts: ProductService,
    private like: LikeService,
    private token: TokenService
  ) {}

  ngOnInit() {
    this.menProducts.getMenProducts().subscribe(
      (response: Product[]) => {
        console.log(response), (this.products = response);
      },
      error => {
        console.log(error);
      }
    );
    this.user_id = +this.token.getUser();
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  onChange(event) {
    console.log(event);
    this.show = +event;
  }



  onLike(product_id) {
    console.log(this.user_id)
    return this.like.like(+product_id, this.user_id).subscribe(response => this.menProducts.getMenProducts().subscribe(
      (response: Product[]) => {
        console.log(response),
        this.products = response;
      },
      error => {
        console.log(error)
      }
    ));
  }
}
