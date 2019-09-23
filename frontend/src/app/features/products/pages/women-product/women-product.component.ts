import { CartService } from "./../../../cart-checkout/services/cart/cart.service";
import { ProductService } from "../../services/products/product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/models/product.model";
import { TokenService } from "src/app/shared/services/token/token.service";
import { LikeService } from "../../services/like/like.service";
import { DomSanitizer } from "@angular/platform-browser";
import { Cart } from "src/app/shared/models/cart.model";

@Component({
  selector: "app-women-product",
  templateUrl: "./women-product.component.html",
  styleUrls: ["./women-product.component.scss"]
})
export class WomenProductComponent implements OnInit {
  constructor(
    private womenProducts: ProductService,
    private token: TokenService,
    private like: LikeService,
    public dom: DomSanitizer,
    private cart: CartService
  ) {
    this.numbers = [34, 35, 36, 37, 38, 39, 40, 41];
  }

  products: Product[];

  productsPagionation: Product[];
  pageOfItems: Array<any>;
  show: number = 3;
  user_id;

  numbers;
  oneProduct: Product;

  public form = {
    quantity: 0,
    number: 0
  };

  ngOnInit() {
    this.womenProducts.getWomenProducts().subscribe(
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
    this.show;
  }
  onLike(product_id) {
    console.log(this.user_id);
    return this.like.like(+product_id, this.user_id).subscribe(response =>
      this.womenProducts.getWomenProducts().subscribe(
        (response: Product[]) => {
          console.log(response), (this.products = response);
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  getOneProduct(product_id: number) {
    this.womenProducts.getProductDetails(product_id).subscribe(
      (response: Product) => {
        console.log(response);
        this.oneProduct = response;
      },
      error => error
    );
  }

  addToCart(product_id: number, quantity: number, number: number) {
    this.cart
      .addToCart(product_id, this.user_id, this.form.quantity, this.form.number)
      .subscribe((response: Cart) => {
        console.log(response),
          this.womenProducts.getWomenProducts().subscribe(
            (response: Product[]) => {
              console.log(response), (this.products = response);
            },
            error => {
              console.log(error);
            }
          );
      });
  }
}
