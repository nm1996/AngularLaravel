import { ProductService } from "../../services/products/product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/models/product.model";
import { LikeService } from "../../services/like/like.service";
import { TokenService } from "src/app/shared/services/token/token.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-sports-product",
  templateUrl: "./sports-product.component.html",
  styleUrls: ["./sports-product.component.scss"]
})
export class SportsProductComponent implements OnInit {
  constructor(
    private sportsProducts: ProductService,
    private like: LikeService,
    private token: TokenService,
    public dom: DomSanitizer
  ) {}

  products: Product[];
  productsPagionation: Product[];
  pageOfItems: Array<any>;
  show: number = 9;
  user_id;

  ngOnInit() {
    this.sportsProducts.getSportsProducts().subscribe(
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
    console.log(this.user_id);
    return this.like.like(+product_id, this.user_id).subscribe(response =>
      this.sportsProducts.getSportsProducts().subscribe(
        (response: Product[]) => {
          console.log(response), (this.products = response);
        },
        error => {
          console.log(error);
        }
      )
    );
  }
}
