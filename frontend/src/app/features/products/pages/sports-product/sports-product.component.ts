import { CartService } from "./../../../cart-checkout/services/cart/cart.service";
import { ProductService } from "../../services/products/product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/models/product.model";
import { LikeService } from "../../services/like/like.service";
import { TokenService } from "src/app/shared/services/token/token.service";
import { DomSanitizer } from "@angular/platform-browser";
import { Cart } from "src/app/shared/models/cart.model";

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
    public dom: DomSanitizer,
    private cart: CartService
  ) {
    this.numbers = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
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

  getOneProduct(product_id: number) {
    this.sportsProducts.getProductDetails(product_id).subscribe(
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
          this.sportsProducts.getSportsProducts().subscribe(
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
