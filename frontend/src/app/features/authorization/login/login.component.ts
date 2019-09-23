import { FormGroup, FormControl, Validators } from "@angular/forms";
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
  form: FormGroup;

  public error = [];

  constructor(
    private jar: JarService,
    private Token: TokenService,
    private auth: AuthService,
    private router: Router,
    private productService: ProductService
  ) {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }

  onSubmit() {
    this.jar
      .login({
        email: this.form.value.email,
        password: this.form.value.password
      })
      .subscribe(
        data => {
          this.handleResponse(data);
          this.handleUser(data["user"]);
          this.handleRole(data["role_id"]);
          console.log(data["user"], "user", "role_id");
          this.productService.toRefreshNavigation();
        },
        error => console.log(error)
      );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl("/profile");
  }

  handleRole(role_id) {
    this.Token.handleRole(role_id);
  }

  handleUser(user) {
    this.Token.handleUser(user);
  }

  ngOnInit() {}
}
