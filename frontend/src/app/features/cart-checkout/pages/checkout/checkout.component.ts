import { Checkout } from "../../../../shared/models/checkout.model";
import { AuthService } from "../../../../shared/services/auth/auth.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { TokenService } from "../../../../shared/services/token/token.service";
import { Cart } from "src/app/shared/models/cart.model";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit {
  private path = "http://localhost:8000/api";
  user_id;
  checkoutItems: Checkout[];
  priceArray: number[];
  fullPrice: number;
  data: Cart[];

  constructor(private http: HttpClient, private token: TokenService, private auth: AuthService, public dom: DomSanitizer) {}

  ngOnInit() {
    this.user_id = this.token.getUser();
    console.log(this.user_id);
    this.data = history.state.data;

    this.priceArray = this.data.map(item => +item.price * item.quantity);

    this.fullPrice = this.priceArray.reduce((previous, current) => {
      return previous + current;
    }, 0);

    // this.http.get(`${this.path}/userCurrentCheckoutList/${this.user_id}`).subscribe(
    //   (response : Checkout[] )=> {
    //     console.log(response, 'CHECKOUT ITEMS');
    //     this.checkoutItems = response;
    //     this.priceArray = response.map(item=>+item.price * item.quantity);

    //     this.fullPrice = this.priceArray.reduce((previous, current) => {
    //       return previous + current
    //     }, 0);
    //     console.log(this.fullPrice, 'FULL PRICE');
    //   },
    //   error => error
    // );
  }
}
