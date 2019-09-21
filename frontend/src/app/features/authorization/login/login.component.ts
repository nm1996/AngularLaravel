import { AuthService } from "../../../shared/services/auth/auth.service";
import { JarService } from "../../../shared/services/jar/jar.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "../../../shared/services/token/token.service";
import { ProductService } from "../../products/services/products/product.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };

  public error = [];

  constructor(
    private jar: JarService,
    private Token: TokenService,
    private auth: AuthService,
    private router: Router,
    private productService: ProductService
  ) {}

  onSubmit() {
    this.jar.login(this.form).subscribe(
      data => {
        this.handleResponse(data);
        this.handleUser(data["user"]);
        this.handleRole(data["role_id"]);
        console.log(data["user"], "user", "role_id");
        this.productService.toRefreshNavigation();
      },
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    let role = +this.Token.getRole();
    if (role === 1) {
      this.router.navigateByUrl("/");
    } else if (role === 2) {
      this.router.navigateByUrl("/admin/users");
    }
  }

  handleRole(role_id) {
    this.Token.handleRole(role_id);
  }

  handleUser(user) {
    this.Token.handleUser(user);
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {}
}
