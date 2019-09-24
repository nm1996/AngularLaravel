import { CartService } from "./../../../cart-checkout/services/cart/cart.service";
import { TokenService } from "./../../../../shared/services/token/token.service";
import { LikeService } from "./../../services/like/like.service";
import { ProductService } from "./../../services/products/product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../../../../shared/models/product.model";
import { DomSanitizer } from "@angular/platform-browser";
import { Cart } from "src/app/shared/models/cart.model";
import { AuthService } from "src/app/shared/services/auth/auth.service";

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
  show: number = 6;
  loggedIn: boolean;
  numbers;
  oneProduct: Product;

  public form = {
    quantity: 0,
    number: 0
  };

  constructor(
    private menProducts: ProductService,
    private like: LikeService,
    private token: TokenService,
    public dom: DomSanitizer,
    private auth: AuthService,
    private cart: CartService
  ) {
    this.numbers = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => (this.loggedIn = value));
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
    console.log(this.user_id);
    return this.like.like(+product_id, this.user_id).subscribe(response =>
      this.menProducts.getMenProducts().subscribe(
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
    this.menProducts.getProductDetails(product_id).subscribe(
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
          this.menProducts.getMenProducts().subscribe(
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
