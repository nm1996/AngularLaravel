import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Cart } from "src/app/shared/models/cart.model";
import { CartService } from "./../../../cart-checkout/services/cart/cart.service";
import { ProductService } from "../../services/products/product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../../../../shared/models/product.model";
import { LikeService } from "../../services/like/like.service";
import { TokenService } from "src/app/shared/services/token/token.service";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth/auth.service";

@Component({
  selector: "app-kids-product",
  templateUrl: "./kids-product.component.html",
  styleUrls: ["./kids-product.component.scss"]
})
export class KidsProductComponent implements OnInit {
  products: Product[];
  productsPagionation: Product[];
  pageOfItems: Array<any>;
  show: number = 6;
  user_id;
  numbers;
  oneProduct: Product;
  loggedIn: boolean;

  public form = {
    quantity: 0,
    number: 0
  };

  constructor(
    private kidsProducts: ProductService,
    private like: LikeService,
    private token: TokenService,
    public dom: DomSanitizer,
    private cart: CartService,
    private auth: AuthService
  ) {
    this.numbers = [34, 35, 36, 37, 38, 39];
  }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => (this.loggedIn = value));
    this.kidsProducts.getKidsProducts().subscribe(
      (response: Product[]) => {
        console.log(response), (this.products = response);
      },
      error => {
        console.log(error);
      }
    );
    this.user_id = this.token.getUser();
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
    return this.like.like(+product_id, this.user_id).subscribe(response => {
      console.log(response);
      this.kidsProducts.getKidsProducts().subscribe(
        (response: Product[]) => {
          console.log(response), (this.products = response);
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  getOneProduct(product_id: number) {
    this.kidsProducts.getProductDetails(product_id).subscribe(
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
          this.kidsProducts.getKidsProducts().subscribe(
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
