import { ActivatedRoute } from "@angular/router";
import { TokenService } from "src/app/services/token/token.service";
import { CartService } from "./../../services/cart/cart.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  cartItems;

  constructor(private cart: CartService, private route: ActivatedRoute) {}

  ngOnInit() {
    let user_id = this.route.snapshot.paramMap.get("id");
    this.cart.getUserItems(user_id).subscribe(
      response => {
        console.log(response), (this.cartItems = response);
      },
      error => {
        console.log(error);
      }
    );
  }

  // getTotalPrice() {
  //   let items;
  //   let tPrice;
  //   let userId = this.route.snapshot.paramMap.get("id");
  //   this.cart.getUserItems(userId).subscribe(
  //       response => items = response,
  //       error => console.log(error)
  //   );

  //   for(let item of items) {
  //     tPrice += item.quantity * item.price;
  //   }

  //   return tPrice;
  // }

}
