import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";
import { TokenService } from "src/app/services/token/token.service";
import { CartService } from "./../../services/cart/cart.service";
import { Component, OnInit } from "@angular/core";
import { Cart } from '../models/cart.model';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  cartItems : Cart[];
  priceArray: number[];
  fullPrice: number;
  deleted: Object;
  user_id;
  checkoutItem: Object;

  constructor(
    private cart: CartService,
    private route: ActivatedRoute,
    private router: Router
     ) {}

  ngOnInit() {
    this.user_id = this.route.snapshot.paramMap.get("id");
    this.cart.getUserItems(this.user_id).subscribe(
      (response: Cart[]) => {
        console.log(response, 'CART ITEMS');
        this.cartItems = response;
        this.priceArray = response.map(item=>+item.price * item.quantity);

        this.fullPrice = this.priceArray.reduce((previous, current) => {
          return previous + current
        }, 0);
        console.log(this.fullPrice, 'FULL PRICE');
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteItem(id: number) {
    console.log(id, 'ITEM ID');
    this.cart.deleteFromCart(id).subscribe(
      (response: Object) => {
        console.log(response);
        this.deleted = response;
        this.cart.getUserItems(this.user_id).subscribe(
          (response: Cart[]) => {
            this.cartItems = response;
            console.log(response);
          }
        )
      }
    );
    
  }

  checkout(id: number) {
    console.log(id, 'id method');
    this.cart.checkout(id).subscribe(
      (response: Object) => {
        console.log(response);
        this.checkoutItem = response;
        this.router.navigateByUrl('checkout');
      }
    );
  }
  
  
}
