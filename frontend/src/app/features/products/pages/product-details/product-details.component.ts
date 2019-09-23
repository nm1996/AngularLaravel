import { Cart } from "src/app/shared/models/cart.model";
import { CartService } from "./../../../cart-checkout/services/cart/cart.service";
import { AuthService } from "../../../../shared/services/auth/auth.service";
import { HttpClient } from "@angular/common/http";
import { ProductService } from "../../services/products/product.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Product } from "../../../../shared/models/product.model";
import { TokenService } from "src/app/shared/services/token/token.service";
import { LikeService } from "../../services/like/like.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  private path = "http://localhost:8000/api/addToCart";
  loggedIn: boolean;
  numbers;
  product_id: number;

  public form = {
    quantity: 0,
    number: 0
  };

  constructor(
    private product: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private token: TokenService,
    private http: HttpClient,
    private like: LikeService,
    public dom: DomSanitizer,
    private cart: CartService
  ) {
    this.numbers = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  }

  details;
  user_id;
  error = [];

  ngOnInit() {
    this.product_id = +this.route.snapshot.paramMap.get("id");
    this.auth.authStatus.subscribe(value => (this.loggedIn = value));

    this.user_id = +this.token.getUser();
    console.log(this.user_id);

    this.product.getProductDetails(this.product_id).subscribe(
      (response: Product) => {
        console.log(response);
        this.details = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  /* Adding item to cart */
  onSubmit() {
    this.cart
      .addToCart(
        +this.product_id,
        +this.user_id,
        +this.form.quantity,
        +this.form.number
      )
      .subscribe(
        (response: Cart) => {
          console.log(response),
            this.router.navigateByUrl(`/buy/cart/${this.user_id}`);
        },
        error => error
      );
  }

  onLike(product_id) {
    return this.like.like(+product_id, this.user_id).subscribe(response =>
      this.product.getProductDetails(this.product_id).subscribe(
        (response: Product) => {
          console.log(response);
          this.details = response;
        },
        error => {
          console.log(error);
        }
      )
    );
  }
}
