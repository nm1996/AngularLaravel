import { HttpClient } from "@angular/common/http";
import { TokenService } from "./../../../services/token/token.service";
import { AuthService } from "./../../../services/auth/auth.service";
import { ProductService } from "./../../../services/products/product.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Product } from '../../models/product.model';

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
    quantity: null,
    number: 0,
    user_id: 0,
    product_id: 0
  };

  constructor(
    private product: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private token: TokenService,
    private http: HttpClient
  ) {
    this.numbers = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  }

  details;
  user_id;
  error = [];

  ngOnInit() {
    this.product_id = +this.route.snapshot.paramMap.get("id");
    this.auth.authStatus.subscribe(value => (this.loggedIn = value));

    this.user_id = this.token.getUser();
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
  getProductId() {
    let ProductId = parseInt(this.details.id);
    return ProductId;
  }

  getUserId() {
    let UserId = parseInt(this.user_id);
    return UserId;
  }

  addToCart(data) {
    return this.http.post(`${this.path}/${this.details.id}`, data);
  }

  handleResponse(data) {
    this.details.id;
    this.user_id;
    this.router.navigateByUrl('/');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  onSubmit() {
    this.addToCart({user_id: this.getUserId(), product_id: this.getProductId(), quantity: this.form.quantity, number: this.form.number}).subscribe(
      data => {this.handleResponse(data), console.log(data)},
      error => this.handleError(error)
    );
  }
}
