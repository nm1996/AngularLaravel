import { TokenService } from "../../services/token/token.service";
import { AuthService } from "../../services/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/features/products/services/products/product.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  public loggedIn: boolean;
  public isAdmin: boolean;
  user_id;
  role: number;
  constructor(
    private auth: AuthService,
    private router: Router,
    private token: TokenService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.auth.authStatus.subscribe(value => (this.loggedIn = value));
    this.user_id = this.token.getUser();
    this.role = +this.token.getRole();
    console.log(this.role);

    this.productService.refreshRole$.subscribe((response: boolean) => {
      console.log(response, "REFRESHED");
      this.role = +this.token.getRole();
    });
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl("/authorization/login");
    this.token.removeUser();
    this.token.removeRole();
  }
}
