import { Cart } from "../../../../../shared/models/cart.model";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from "../../../services/cart/cart.service";
import { Component, OnInit } from "@angular/core";
import { TokenService } from "src/app/shared/services/token/token.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  private path = "http://localhost:8000/api";
  product;
  user_id;
  cart_id;
  numbers;

  form = {
    quantity: null,
    number: null
  };
  constructor(
    private cart: CartService,
    private route: ActivatedRoute,
    private token: TokenService,
    private router: Router,
    private http: HttpClient,
    public dom: DomSanitizer
  ) {
    this.numbers = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  }

  ngOnInit() {
    this.user_id = this.token.getUser();
    this.cart_id = this.route.snapshot.paramMap.get("id");
    this.cart.showItem(this.cart_id).subscribe(
      (response: Cart) => {
        console.log(response, "ITEM DETAILS"), (this.product = response);
      },
      error => console.log(error)
    );
  }

  updateItem(data) {
    return this.http.post(`${this.path}/updateItem/${this.cart_id}`, data);
  }

  handleResponse(data) {
    this.cart_id;
    this.user_id;
    this.router.navigateByUrl(`buy/cart/${this.user_id}`);
  }

  handleError(error) {
    error = error;
  }

  onSubmit() {
    this.updateItem({
      quantity: this.form.quantity,
      number: this.form.number
    }).subscribe(data => this.handleResponse(data), error => error);
  }
}
