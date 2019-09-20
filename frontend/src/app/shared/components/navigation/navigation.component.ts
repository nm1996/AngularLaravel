import { TokenService } from "../../services/token/token.service";
import { AuthService } from "../../services/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  public loggedIn: boolean;
  user_id;
  role;
  constructor(
    private auth: AuthService,
    private router: Router,
    private token: TokenService
  ) {}

  ngOnInit() {
    this.auth.authStatus.subscribe(value => (this.loggedIn = value));
    this.user_id = this.token.getUser();
    this.role = this.token.getRole();
    console.log(this.role);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl("/authorization/login");
    this.token.removeUser();
  }
}
