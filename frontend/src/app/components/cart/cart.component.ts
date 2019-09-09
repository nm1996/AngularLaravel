import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";
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

  constructor(
    private cart: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
     ) {}

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

  logout(event: MouseEvent, id) {
    event.preventDefault();
    id = this.cartItems.id;
    this.http.get(`http://localhost:8000/api/deleteUserItem/${id}`);

  }

  
  
}
